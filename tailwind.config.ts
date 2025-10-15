/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        risk: {
          lowHighNeed: '#16A34A',
          lowLowNeed: '#2563EB',
          medium: '#FACC15',
          high: '#FB923C',
          veryHigh: '#DC2626',
        }
      }
    },
  },
  plugins: [],
}
