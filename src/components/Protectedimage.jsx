// A lightweight deterrent against casual right-click-save / drag-save / copy-image-address.
// Note: this cannot stop a determined visitor (browser dev tools, view-source, and
// screenshots always work) — it only removes the easy, one-click ways of grabbing the file.
export default function ProtectedImage({ src, alt, className = "" }) {
  return (
    <div
      role="img"
      aria-label={alt}
      onContextMenu={(e) => e.preventDefault()}
      className={`bg-cover bg-center select-none ${className}`}
      style={{ backgroundImage: `url(${src})` }}
      draggable={false}
    />
  );
}
