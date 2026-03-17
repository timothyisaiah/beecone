"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Star } from "lucide-react";
import { Product } from "@/types";
import { formatPrice, getAverageRating } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const avgRating = getAverageRating(product.reviews);

  return (
    <div className="group relative flex flex-col rounded-2xl bg-white border border-stone-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Image */}
      <Link
        href={`/shop/${product.slug}`}
        className="relative aspect-square overflow-hidden bg-amber-50"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {product.compareAtPrice && (
          <span className="absolute top-3 left-3 rounded-full bg-red-500 px-2.5 py-1 text-xs font-bold text-white">
            Sale
          </span>
        )}
        {product.tags.includes("bestseller") && !product.compareAtPrice && (
          <span className="absolute top-3 left-3 rounded-full bg-amber-600 px-2.5 py-1 text-xs font-bold text-white">
            Bestseller
          </span>
        )}
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col p-4">
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-serif text-lg font-semibold text-stone-900 group-hover:text-amber-700 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-stone-500 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        {product.reviews.length > 0 && (
          <div className="mt-2 flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span className="text-xs font-medium text-stone-600">
              {avgRating}
            </span>
            <span className="text-xs text-stone-400">
              ({product.reviews.length})
            </span>
          </div>
        )}

        {/* Price + Add to cart */}
        <div className="mt-auto pt-4 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-stone-900">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice && (
              <span className="text-sm text-stone-400 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>
          <button
            onClick={() => addItem(product)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-600 text-white hover:bg-amber-500 transition-colors shadow-sm"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
