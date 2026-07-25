import { useEffect, useMemo, useState } from "react";
import { ImageIcon } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { projects } from "../content";
import ProtectedImage from "./ProtectedImage";
import ProjectModal from "./ProjectModal";

const filters = ["All", "Website", "Automation", "Other"];
const filterLabels = {
  All: "All",
  Website: "Funnel / Website",
  Automation: "Automation",
  Other: "Other",
};

const PAGE_SIZE = 4;

export default function Work() {
  const ref = useReveal();
  const [active, setActive] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active],
  );

  // Reset pagination whenever the filter changes
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [active]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <section
      id="work"
      ref={ref}
      className="reveal max-w-content mx-auto px-6 py-20 sm:py-28 border-t border-line"
    >
      <p className="font-mono text-xs text-accent mb-4">04 — Work</p>
      <h2 className="font-display font-medium text-2xl sm:text-3xl text-text mb-4">
        Featured Projects
      </h2>
      <p className="text-muted leading-relaxed max-w-lg mb-8">
        Innovative funnel designs + powerful automation workflows that transform
        businesses — from AI-driven website generation to lead-winning SMS
        campaigns.
      </p>

      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
              active === f
                ? "bg-text text-bg border-text"
                : "text-muted border-line hover:border-accent hover:text-accent"
            }`}
          >
            {filterLabels[f]}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {visible.map((project) => (
          <button
            key={project.name}
            type="button"
            onClick={() => setSelected(project)}
            className="group text-left rounded-xl border border-line overflow-hidden hover:border-accent/60 transition-colors"
          >
            {project.image ? (
              <ProtectedImage
                src={project.image}
                alt={`${project.name} preview`}
                className="aspect-video border-b border-line group-hover:scale-[1.02] transition-transform duration-300"
              />
            ) : (
              <div className="aspect-video bg-surface flex items-center justify-center border-b border-line">
                <ImageIcon size={28} className="text-faint" strokeWidth={1.5} />
              </div>
            )}
            <div className="p-4 flex items-center justify-between gap-3">
              <h3 className="font-display text-base text-text group-hover:text-accent transition-colors">
                {project.name}
              </h3>
              <span className="font-mono text-xs text-faint shrink-0">
                {project.year}
              </span>
            </div>
          </button>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-10">
          <button
            type="button"
            onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
            className="px-6 py-2.5 rounded-full border border-line text-sm text-text hover:border-accent hover:text-accent transition-colors"
          >
            See more
          </button>
        </div>
      )}

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
