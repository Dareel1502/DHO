import { profile } from "../content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-faint">
        <p>
          Copyright {year} | {profile.name} | Portfolio
        </p>
        <a href="#top" className="hover:text-accent transition-colors">
          back to top ↑
        </a>
      </div>
    </footer>
  );
}
