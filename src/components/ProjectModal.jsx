import { ArrowUpRight, X } from "lucide-react";
import ProtectedImage from "./ProtectedImage";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

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
          {project.image ? (
            <ProtectedImage
              src={project.image}
              alt={`${project.name} preview`}
              className="w-full aspect-video"
            />
          ) : (
            <div className="w-full aspect-video bg-surface-2" />
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
            <span>{project.category}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl text-text mb-1.5">
            {project.name}
          </h3>
          {project.tagline && (
            <p className="font-mono text-xs text-accent mb-4">
              {project.tagline}
            </p>
          )}
          <p className="text-muted leading-relaxed mb-6">
            {project.description}
          </p>
          href={project.link}
          target="_blank" rel="noreferrer" className="inline-flex items-center
          gap-2 px-5 py-2.5 rounded-full bg-text text-bg font-medium text-sm
          hover:bg-accent transition-colors"
          {project.category === "Website" ? "Visit Site" : "View Project"}
          <ArrowUpRight size={16} />
        </div>
      </div>
    </div>
  );
}
