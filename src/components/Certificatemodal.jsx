import { useEffect } from "react";
import { Award, X } from "lucide-react";
import ProtectedImage from "./ProtectedImage";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";

export default function CertificateModal({ certificate, onClose }) {
  useLockBodyScroll(!!certificate);

  useEffect(() => {
    if (!certificate) return;
    const close = () => onClose();
    window.addEventListener("modal-escape", close);
    return () => window.removeEventListener("modal-escape", close);
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg bg-surface border border-line rounded-2xl overflow-hidden max-h-[85vh] overflow-y-auto"
      >
        <div className="relative">
          {certificate.image ? (
            <ProtectedImage
              src={certificate.image}
              alt={`${certificate.name} certificate`}
              className="w-full aspect-video"
            />
          ) : (
            <div className="w-full aspect-video bg-surface-2 flex items-center justify-center">
              <Award size={40} className="text-faint" strokeWidth={1.5} />
            </div>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-3 right-3 bg-bg/80 backdrop-blur rounded-full p-1.5 text-text hover:text-accent transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 sm:p-7">
          <div className="flex items-center gap-2 mb-3 font-mono text-xs text-faint">
            <span>{certificate.date}</span>
          </div>

          <h3 className="font-display text-xl sm:text-2xl text-text mb-1.5">
            {certificate.name}
          </h3>

          <p className="text-sm text-muted mb-1">{certificate.issuer}</p>
          <p className="font-mono text-xs text-accent mb-5">
            {certificate.achievement}
          </p>

          <p className="text-muted leading-relaxed">
            {certificate.description}
          </p>
        </div>
      </div>
    </div>
  );
}
