// tailwind.config.js
import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  content: [
    "./src/**/*.tsx",
    "./node_modules/@heroui/theme/dist/components/tabs.js",
  ],
  theme: {
    light: {
      colors: {
        primary: "#644bba",
        "primary-light": "#e7dff8",
        "primary-lighter": "#E1E7FD",
        content: "#E6E1E6",
      },
    },
    dark: {
      color: {
        primary: "#644bba",
        "primary-light": "#e7dff8",
        "primary-lighter": "#a8a29e",
      },
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#644bba",
            },
          },
        },
        dark: {
          colors: {
            foreground: "#fff",
            primary: {
              DEFAULT: "#644bba",
              foreground: "#fff",
            },
          },
        },
      },
    }),
  ],
} satisfies Config;

export default config;
