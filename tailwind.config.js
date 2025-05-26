module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'background': "#fbfaf4",
        'surface': "#f9efbc",
        'on-surface': "#2f1b09",
        'border': "#ddb750",
        'primary': "#a36d16",
        'on-primary': "#ffffff",
        'secondary': "#cd5945",
        'on-secondary': "#ffffff",
        'success': "#368a31",
        'on-success': "#ffffff",
        'info': "#2d84a2",
        'on-info': "#ffffff",
        'warning': "#807910",
        'on-warning': "#ffffff",
        'error': "#b53966",
        'on-error': "#ffffff",
        'text': "#2f1b09",
        'muted': "#86540e",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        'lg': '1rem',
        'xl': '1.5rem',
      },
      spacing: {
        'section': '2.5rem',
      }
    },
  },
  plugins: [],
} 