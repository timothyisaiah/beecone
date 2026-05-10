#!/usr/bin/env python3
"""
Generate barcode images for Beecone catalog products listed in beecone/src/data/products.ts.

Default symbology is Code 128 (works well for arbitrary SKU strings and does not require a GS1
company prefix). Optional EAN-13 mode uses a fixed internal company prefix plus a zero-padded
product id; replace the prefix with your real GS1 range before retail use.

Examples:
  python generate_barcodes.py
  python generate_barcodes.py --symbology ean13 --ean-prefix 08600010
  python generate_barcodes.py --out-dir ./labels --format svg

Each catalog row yields one barcode; the encoded value includes pack size so separate SKUs stay
distinct when you add multiple sizes later.
"""

from __future__ import annotations

import argparse
import csv
import re
import sys
from pathlib import Path

import barcode
from barcode.writer import ImageWriter, SVGWriter


def _repo_root() -> Path:
    return Path(__file__).resolve().parents[1]


def compact_size_label(size: str) -> str:
    """Normalize display size for barcodes/filenames (e.g. '3 × 200g' -> '3x200g')."""
    t = size.strip().lower()
    t = re.sub(r"\s*[×x]\s*", "x", t)
    t = re.sub(r"\s+", "", t)
    return t


def parse_products_ts(path: Path) -> list[dict[str, str]]:
    text = path.read_text(encoding="utf-8")
    pattern = re.compile(
        r'\{\s*\n\s*id:\s*"([^"]+)",\s*\n\s*name:\s*"([^"]*)",\s*\n\s*slug:\s*"([^"]+)"',
        re.MULTILINE,
    )
    matches = list(pattern.finditer(text))
    rows: list[dict[str, str]] = []
    for i, m in enumerate(matches):
        start = m.start()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        chunk = text[start:end]
        sz = re.search(r'^\s*size:\s*"([^"]*)"', chunk, re.MULTILINE)
        if not sz:
            raise ValueError(
                f'No size field after product id {m.group(1)!r} in {path}; expected size: "...".'
            )
        rows.append(
            {"id": m.group(1), "name": m.group(2), "slug": m.group(3), "size": sz.group(1)}
        )
    if not rows:
        raise ValueError(f"No products parsed from {path}. Check file format.")
    return rows


def ean13_check_digit(digits12: str) -> str:
    if len(digits12) != 12 or not digits12.isdigit():
        raise ValueError("EAN-13 base must be exactly 12 digits.")
    total = 0
    for i, ch in enumerate(digits12, start=1):
        n = int(ch)
        total += n * 3 if i % 2 == 0 else n
    check = (10 - (total % 10)) % 10
    return str(check)


def build_barcode_value(
    symbology: str,
    *,
    product_id: str,
    slug: str,
    size: str,
    ean_prefix: str | None,
    variant_index_1_based: int,
) -> str:
    size_key = compact_size_label(size)
    if symbology == "code128":
        return f"BEE-{int(product_id):03d}-{size_key}-{slug}"
    if symbology == "ean13":
        if not ean_prefix or not ean_prefix.isdigit():
            raise ValueError("EAN-13 requires --ean-prefix with digits only.")
        item = f"{variant_index_1_based:04d}"
        base = f"{ean_prefix}{item}"
        if len(base) != 12:
            raise ValueError(
                f"EAN-13 base must be 12 digits; got {len(base)} ({base!r}). "
                "Adjust --ean-prefix length so prefix + 4-digit variant index = 12 digits."
            )
        return base + ean13_check_digit(base)
    raise ValueError(f"Unknown symbology: {symbology}")


def main() -> int:
    default_products = _repo_root() / "src" / "data" / "products.ts"
    parser = argparse.ArgumentParser(description="Generate Beecone product barcodes.")
    parser.add_argument(
        "--products-file",
        type=Path,
        default=default_products,
        help=f"Path to products.ts (default: {default_products})",
    )
    parser.add_argument(
        "--out-dir",
        type=Path,
        default=_repo_root() / "barcodes",
        help="Output directory for images and manifest CSV",
    )
    parser.add_argument(
        "--format",
        choices=("png", "svg"),
        default="png",
        help="Raster PNG (default) or vector SVG",
    )
    parser.add_argument(
        "--symbology",
        choices=("code128", "ean13"),
        default="code128",
        help="Barcode type (default: code128)",
    )
    parser.add_argument(
        "--ean-prefix",
        default="08600010",
        help="For ean13: prefix digits + 4-digit row variant (catalog order 0001…) = 12 digits before checksum",
    )
    parser.add_argument(
        "--dpi",
        type=int,
        default=300,
        help="PNG resolution (ImageWriter module_height scales with this)",
    )
    args = parser.parse_args()

    products_path: Path = args.products_file
    if not products_path.is_file():
        print(f"Products file not found: {products_path}", file=sys.stderr)
        return 1

    out_dir: Path = args.out_dir
    out_dir.mkdir(parents=True, exist_ok=True)

    symbology = args.symbology
    writer: ImageWriter | SVGWriter
    writer_options: dict
    if args.format == "png":
        writer = ImageWriter()
        writer_options = {
            "module_width": 0.25,
            "module_height": 12.0,
            "quiet_zone": 2.5,
            "font_size": 11,
            "text_distance": 4.0,
            "dpi": args.dpi,
        }
    else:
        writer = SVGWriter()
        writer_options = {
            "module_width": 0.25,
            "module_height": 12.0,
            "quiet_zone": 2.5,
            "font_size": 11,
            "text_distance": 4.0,
        }

    cls = barcode.get_barcode_class("code128" if symbology == "code128" else "ean13")
    products = parse_products_ts(products_path)
    manifest_path = out_dir / "beecone_barcodes.csv"
    rows: list[dict[str, str]] = []

    for variant_index_1_based, p in enumerate(products, start=1):
        pid, name, slug, size = p["id"], p["name"], p["slug"], p["size"]
        value = build_barcode_value(
            symbology,
            product_id=pid,
            slug=slug,
            size=size,
            ean_prefix=args.ean_prefix,
            variant_index_1_based=variant_index_1_based,
        )
        inst = cls(value, writer=writer)
        safe_slug = re.sub(r"[^a-zA-Z0-9._-]+", "_", slug)
        safe_size = re.sub(r"[^a-zA-Z0-9._-]+", "_", compact_size_label(size))
        filename = f"beecone_{pid}_{safe_size}_{safe_slug}"
        inst.save(str(out_dir / filename), options=writer_options)
        ext = "png" if args.format == "png" else "svg"
        rows.append(
            {
                "product_id": pid,
                "name": name,
                "slug": slug,
                "size": size,
                "barcode_value": value,
                "filename": f"{filename}.{ext}",
            }
        )

    with manifest_path.open("w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(
            f,
            fieldnames=["product_id", "name", "slug", "size", "barcode_value", "filename"],
        )
        w.writeheader()
        w.writerows(rows)

    print(f"Wrote {len(rows)} barcode(s) to {out_dir}")
    print(f"Manifest: {manifest_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
