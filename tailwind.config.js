/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F1E7",
        "paper-pure": "#FCF9F3",
        "paper-lift": "#EDE6D6",
        ink: "#1E1B16",
        "ink-soft": "#4A453B",
        "ink-mute": "#78715F",
        "ink-faint": "#ABA38F",
        rust: "#B3452A",
        "rust-deep": "#8C3320",
        "rust-soft": "#EBD8C8",
        green: "#1F5A4A",
        "green-soft": "#DCE9E3",
        "ink-blue": "#3553A0",
        line: "rgba(30,27,22,0.12)",
        "line-soft": "rgba(30,27,22,0.07)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["Space Mono", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
        widest3: "0.38em",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "wave-drift": "waveDrift 3s ease-in-out infinite",
        "marquee": "marquee 32s linear infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        "grain": "grain 8s steps(10) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        waveDrift: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -5%)" },
          "20%": { transform: "translate(-10%, 5%)" },
          "30%": { transform: "translate(5%, -10%)" },
          "40%": { transform: "translate(-5%, 15%)" },
          "50%": { transform: "translate(-15%, 5%)" },
          "60%": { transform: "translate(15%, 0%)" },
          "70%": { transform: "translate(0%, 10%)" },
          "80%": { transform: "translate(-10%, 0%)" },
          "90%": { transform: "translate(10%, 5%)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      maxWidth: {
        content: "1440px",
      },
    },
  },
  plugins: [],
};