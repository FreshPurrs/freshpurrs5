/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#4b9edb', // Indigo-Blue (Primary CTA)
          'primary-light': '#6fb5e5',
          'primary-dark': '#2563eb', // For gradient in final CTA
          secondary: '#f75d2c', // Bright Orange (Hero Accent)
          'secondary-light': '#ff8a64',
          'secondary-dark': '#d44016',
          green: '#76c945', // Eco Green (Accent Green)
          'green-light': '#9ad975',
          'green-dark': '#5ba32e',
          yellow: '#fcd34d', // Warm Yellow (Pricing Cards)
          'yellow-light': '#fef3c7', // Utility Highlight
          'yellow-dark': '#ea5b3c', // Red-Orange (Secondary CTA Box)
          'mid-tier': '#fed7aa', // Soft Orange (Mid-Tier Pricing)
          'premium-tier': '#d9f99d', // Light Lime (Premium Tier)
        },
        text: {
          primary: '#1f2937', // Slate Gray (Text Primary)
          secondary: '#6b7280', // Gray (Text Secondary)
        },
        background: {
          white: '#ffffff',
          light: '#f9fafb', // Soft Gray (Subtle Gray BG)
          gray: '#f0f0f0',
        },
      },
    },
  },
  plugins: [],
};
