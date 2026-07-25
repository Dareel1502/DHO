/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b0b0c",
        surface: "#141415",
        "surface-2": "#1a1a1b",
        line: "#232324",
        text: "#ededec",
        muted: "#98978f",
        faint: "#56554f",
        accent: "#d98f3e",
        "accent-dim": "#5c4126",
      },
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "serif"],
        body: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        mono: ['"Space Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "42rem",
      },
    },
  },
  plugins: [],
};
