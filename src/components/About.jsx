import { useReveal } from "../hooks/useReveal";
import { about, techStack } from "../content";
import profileDots from "../assets/profile-dots.png";

export default function About() {
  const ref = useReveal();

  return (
    <section
      id="about"
      ref={ref}
      className="reveal max-w-content mx-auto px-6 py-20 sm:py-28 border-t border-line"
    >
      <p className="font-mono text-xs text-accent mb-4">01 — About</p>
      <h2 className="font-display font-medium text-2xl sm:text-3xl text-text mb-2">
        Who am I?
      </h2>
      <p className="text-muted italic mb-10 max-w-md">{about.intro}</p>

      <div className="grid sm:grid-cols-[14rem_1fr] gap-10 sm:gap-14">
        <div className="sm:sticky sm:top-28 sm:self-start">
          <div className="w-40 sm:w-full mx-auto sm:mx-0 rounded-2xl border border-line overflow-hidden">
            <img
              src={profileDots}
              alt="Portrait of Daryl Hans Ocao, rendered as a dot-halftone illustration"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-faint mb-3">
              Overview
            </h3>
            <p className="text-muted leading-relaxed">{about.overview}</p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-faint mb-3">
              Core Competencies
            </h3>
            <p className="text-muted leading-relaxed">{about.competencies}</p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-faint mb-3">
              Technology Stack
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              {about.stackIntro}
            </p>
            <ul className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <li
                  key={tech}
                  className="font-mono text-xs text-muted border border-line rounded-full px-3 py-1.5"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
