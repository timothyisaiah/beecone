import logoDark from "@/../public/images/logo-dark.png";
import logoGold from "@/../public/images/logo-gold.png";

export default function Watermark() {
  return (
    <div className="watermark-overlay" aria-hidden="true">
      <div
        className="watermark-layer watermark-dark"
        style={{ backgroundImage: `url(${logoDark.src})` }}
      />
      <div
        className="watermark-layer watermark-gold"
        style={{ backgroundImage: `url(${logoGold.src})` }}
      />
    </div>
  );
}
