import { useReveal } from "../hooks/useReveal";
import { services, servicesIntro } from "../content";

export default function Services() {
  const ref = useReveal();

  return (
    <section
      id="services"
      ref={ref}
      className="reveal max-w-content mx-auto px-6 py-20 sm:py-28 border-t border-line"
    >
      <p className="font-mono text-xs text-accent mb-4">03 — Services</p>
      <h2 className="font-display font-medium text-2xl sm:text-3xl text-text mb-4">
        Core Services
      </h2>
      <p className="text-muted leading-relaxed max-w-lg mb-12">
        {servicesIntro}
      </p>

      <div className="space-y-10">
        {services.map((service, i) => (
          <div
            key={service.name}
            className="grid sm:grid-cols-[3rem_1fr] gap-3 sm:gap-6"
          >
            <span className="font-mono text-xs text-faint pt-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-lg text-text mb-1.5">
                {service.name}
              </h3>
              <p className="text-muted leading-relaxed max-w-lg mb-4">
                {service.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-xs text-muted border border-line rounded-full px-3 py-1.5"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
