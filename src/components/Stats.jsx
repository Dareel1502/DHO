import { useReveal } from "../hooks/useReveal";
import { stats } from "../content";

export default function Stats() {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      className="reveal max-w-content mx-auto px-6 pb-20 sm:pb-28"
    >
      <div className="grid grid-cols-3 gap-6 border-t border-b border-line py-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl sm:text-4xl text-text">
              {stat.value}
            </p>
            <p className="font-mono text-[0.65rem] sm:text-xs text-faint tracking-wide uppercase mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
