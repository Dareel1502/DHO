import { ArrowUpRight, Mail } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { useContactModal } from "../context/ContactModalContext";
import { profile } from "../content";

const socials = [
  { label: "Facebook", href: profile.facebook },
  { label: "Instagram", href: profile.instagram },
  { label: "Telegram", href: profile.telegram },
  { label: "Viber", href: profile.phoneSms },
];

export default function Contact() {
  const ref = useReveal();
  const { open } = useContactModal();

  return (
    <section
      id="contact"
      ref={ref}
      className="reveal max-w-content mx-auto px-6 py-20 sm:py-28 border-t border-line"
    >
      <p className="font-mono text-xs text-accent mb-4">07 — Contact</p>
      <h2 className="font-display font-medium text-2xl sm:text-3xl text-text mb-4">
        Get in Touch
      </h2>
      <p className="text-muted mb-10 leading-relaxed max-w-md">
        I'm always open to discussing new opportunities, creative projects, and
        how we can work together to bring your ideas to life.
      </p>

      <div className="grid sm:grid-cols-2 gap-10 mb-12">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-faint mb-3">
            Contact me
          </h3>
          <p className="text-text">{profile.email}</p>
          <p className="text-text mt-1">{profile.phone}</p>
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-faint mb-3">
            Find me
          </h3>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {socials.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
                >
                  {label}
                  <ArrowUpRight size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        type="button"
        onClick={open}
        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-text text-bg font-medium text-sm hover:bg-accent transition-colors mb-14"
      >
        <Mail size={16} />
        Send a message
      </button>

      <div className="border-t border-line pt-10">
        <p className="text-muted mb-4 max-w-md">
          Interested? Let's discuss how we can work together to create something
          amazing.
        </p>
        <button
          type="button"
          onClick={open}
          className="inline-flex items-center gap-2 text-sm text-text hover:text-accent transition-colors"
        >
          Let's Connect
          <ArrowUpRight size={14} />
        </button>
      </div>
    </section>
  );
}
