import { CheckCircle2 } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { experience } from "../content";

export default function Experience() {
  const ref = useReveal();

  return (
    <section
      id="experience"
      ref={ref}
      className="reveal max-w-content mx-auto px-6 py-20 sm:py-28 border-t border-line"
    >
      <p className="font-mono text-xs text-accent mb-4">02 — Experience</p>
      <h2 className="font-display font-medium text-2xl sm:text-3xl text-text mb-12">
        Where I've worked
      </h2>

      <div className="space-y-14">
        {experience.map((job) => (
          <div
            key={`${job.company}-${job.period}`}
            className="grid sm:grid-cols-[9rem_1fr] gap-2 sm:gap-8"
          >
            <p className="font-mono text-xs text-faint pt-1">{job.period}</p>
            <div>
              <h3 className="font-display text-lg text-text">
                {job.role}
                <span className="text-muted font-body text-base">
                  {" "}
                  · {job.company}
                </span>
              </h3>
              <p className="text-muted leading-relaxed mt-2">
                {job.description}
              </p>

              {job.highlights?.length > 0 && (
                <ul className="mt-4 space-y-2.5">
                  {job.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={16}
                        className="text-accent shrink-0 mt-0.5"
                        strokeWidth={1.75}
                      />
                      <span className="text-sm text-muted leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
