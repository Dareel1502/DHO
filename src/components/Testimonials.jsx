import { useReveal } from "../hooks/useReveal";
import { testimonials } from "../content";

export default function Testimonials() {
  const ref = useReveal();

  return (
    <section
      id="testimonials"
      ref={ref}
      className="reveal max-w-content mx-auto px-6 py-20 sm:py-28 border-t border-line"
    >
      <p className="font-mono text-xs text-accent mb-4">06 — Testimonials</p>
      <h2 className="font-display font-medium text-2xl sm:text-3xl text-text mb-12">
        What people say
      </h2>

      <div className="space-y-10">
        {testimonials.map((t) => (
          <figure key={t.name}>
            <blockquote className="font-display text-xl sm:text-2xl italic text-text leading-snug">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-3 text-sm text-muted">
              {t.name}
              <span className="text-faint"> — {t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
