export default function Watermark() {
  return (
    <div className="watermark-overlay" aria-hidden="true">
      <div className="watermark-layer watermark-dark" />
      <div className="watermark-layer watermark-gold" />
    </div>
  );
}
