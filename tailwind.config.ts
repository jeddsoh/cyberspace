import { nextui } from "@nextui-org/react"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF", // or DEFAULT
            foreground: "#11181C", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
            // ... rest of the colors
          },
        },
        dark: {
          colors: {
            background: "#0c0a09", // or DEFAULT
            foreground: "#fff", // or 50 to 900 DEFAULT
            primary: {
              50: "#e6f1fe",
              100: "#cce3fd",
              200: "#99c7fb",
              300: "#66aaf9",
              400: "#338ef7",
              500: "#10b981",
              600: "#005bc4",
              700: "#004493",
              800: "#002e62",
              900: "#064e3b",
              foreground: "#fff",
              DEFAULT: "#10b981",
            },
          },
          // ... rest of the colors
        },
      },
    }),
  ],
}

export default config
