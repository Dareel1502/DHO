import { useState } from "react";
import { Award } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { certificates } from "../content";
import ProtectedImage from "./ProtectedImage";
import CertificateModal from "./CertificateModal";

export default function Certificates() {
  const ref = useReveal();
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="certificates"
      ref={ref}
      className="reveal max-w-content mx-auto px-6 py-20 sm:py-28 border-t border-line"
    >
      <p className="font-mono text-xs text-accent mb-4">05 — Certificates</p>
      <h2 className="font-display font-medium text-2xl sm:text-3xl text-text mb-12">
        Certifications
      </h2>

      <div className="grid sm:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <button
            key={cert.name}
            type="button"
            onClick={() => setSelected(cert)}
            className="group text-left rounded-xl border border-line overflow-hidden hover:border-accent/60 transition-colors"
          >
            {cert.image ? (
              <ProtectedImage
                src={cert.image}
                alt={`${cert.name} certificate`}
                className="aspect-video border-b border-line group-hover:scale-[1.02] transition-transform duration-300"
              />
            ) : (
              <div className="aspect-video bg-surface flex items-center justify-center border-b border-line">
                <Award size={28} className="text-faint" strokeWidth={1.5} />
              </div>
            )}
            <div className="p-4 flex items-center justify-between gap-3">
              <h3 className="font-display text-base text-text group-hover:text-accent transition-colors leading-snug">
                {cert.name}
              </h3>
              <span className="font-mono text-xs text-faint shrink-0">
                {cert.year}
              </span>
            </div>
          </button>
        ))}
      </div>

      <CertificateModal
        certificate={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
