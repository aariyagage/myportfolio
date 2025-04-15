/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./pages/**/*.{ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          correct: '#4ade80',
          fontFamily: {
            sans: ["InterTight", "sans-serif"],
            mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
          }          
      },
    },
    plugins: [],
  }
}