import { useState } from "react";
import {
  Menu,
  X,
  User,
  Briefcase,
  Wrench,
  FolderGit2,
  Award,
  MessageSquareQuote,
  Mail,
} from "lucide-react";
import { profile } from "../content";

const links = [
  { href: "#about", label: "About", index: "01", icon: User },
  { href: "#experience", label: "Experience", index: "02", icon: Briefcase },
  { href: "#services", label: "Services", index: "03", icon: Wrench },
  { href: "#work", label: "Work", index: "04", icon: FolderGit2 },
  { href: "#certificates", label: "Certificates", index: "05", icon: Award },
  {
    href: "#testimonials",
    label: "Testimonials",
    index: "06",
    icon: MessageSquareQuote,
  },
  { href: "#contact", label: "Contact", index: "07", icon: Mail },
];

export default function Nav() {
  const [expanded, setExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop: hover-expanding left rail */}
      <aside
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        className={`hidden md:flex flex-col fixed inset-y-0 left-0 z-40 bg-bg border-r border-line transition-[width] duration-300 ease-out ${
          expanded ? "w-64" : "w-16"
        }`}
      >
        <a
          href="#top"
          className={`flex items-center h-20 shrink-0 border-b border-line ${
            expanded ? "justify-start px-6" : "justify-center px-0"
          }`}
        >
          <span
            className={`font-display text-text whitespace-nowrap overflow-hidden ${
              expanded ? "text-lg" : "text-base tracking-tight"
            }`}
          >
            {expanded ? profile.name : "DHO"}
          </span>
        </a>

        <ul className="flex-1 flex flex-col gap-1 px-2 py-4">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`flex items-center rounded-lg text-muted hover:text-text hover:bg-surface transition-colors py-2.5 ${
                    expanded ? "gap-3 px-3" : "justify-center px-0"
                  }`}
                >
                  <span
                    className={`font-mono text-xs text-faint text-center shrink-0 overflow-hidden transition-all duration-300 ${
                      expanded ? "w-5 opacity-100" : "w-0 opacity-0"
                    }`}
                  >
                    {link.index}
                  </span>
                  <Icon size={18} className="shrink-0" />
                  <span
                    className={`text-sm whitespace-nowrap overflow-hidden transition-all duration-300 ${
                      expanded
                        ? "max-w-[9rem] opacity-100"
                        : "max-w-0 opacity-0"
                    }`}
                  >
                    {link.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Mobile: top bar with dropdown menu */}
      <header
        className={`md:hidden fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          mobileOpen
            ? "bg-bg border-b border-line"
            : "bg-bg/95 backdrop-blur border-b border-line"
        }`}
      >
        <nav className="flex items-center justify-between px-6 py-5">
          <a href="#top" className="font-display text-lg text-text">
            {profile.name}
          </a>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="text-text"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {mobileOpen && (
          <ul className="px-6 pb-6 flex flex-col gap-1 border-t border-line pt-4">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 py-2.5 text-muted hover:text-text transition-colors"
                  >
                    <span className="font-mono text-xs text-faint w-5 text-center">
                      {link.index}
                    </span>
                    <Icon size={18} />
                    <span className="text-sm">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </header>
    </>
  );
}
