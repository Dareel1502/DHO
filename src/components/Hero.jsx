import { Download, CalendarDays } from "lucide-react";
import { profile, capabilities } from "../content";
import { useContactModal } from "../context/ContactModalContext";

export default function Hero() {
  const { open } = useContactModal();

  return (
    <section
      id="top"
      className="max-w-content mx-auto px-6 pt-40 pb-16 sm:pt-48 sm:pb-20 md:pt-28"
    >
      <p className="font-mono text-xs text-accent tracking-wide mb-5">
        // {profile.tagline}
        <span className="cursor-blink">▍</span>
      </p>

      <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl leading-[1.15] text-text mb-5 max-w-xl">
        {profile.headline}
      </h1>

      <p className="text-muted italic mb-6">
        {profile.name} — {profile.role}
      </p>

      <p className="text-muted text-lg leading-relaxed max-w-md mb-8">
        {profile.focus}
      </p>

      <ul className="flex flex-wrap gap-2 mb-10">
        {capabilities.map((cap) => (
          <li
            key={cap}
            className="font-mono text-xs text-muted border border-line rounded-full px-3 py-1.5"
          >
            {cap}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center gap-4 text-sm">
        <a
          href={profile.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-text text-bg font-medium hover:bg-accent transition-colors"
        >
          <CalendarDays size={15} />
          Book a call
        </a>
        <button
          type="button"
          onClick={open}
          className="px-5 py-2.5 rounded-full border border-line text-text hover:border-accent hover:text-accent transition-colors"
        >
          Get in touch
        </button>
        <a
          href={profile.resumeUrl}
          download
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-line text-text hover:border-accent hover:text-accent transition-colors"
        >
          <Download size={15} />
          Download Resume
        </a>
      </div>
    </section>
  );
}
