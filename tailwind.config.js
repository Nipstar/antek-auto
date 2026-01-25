/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#1A1A1A',
        'warm-beige': '#E8DFD0',
        'soft-sage': '#C5D8CC',
        'muted-taupe': '#B8A895',
        terracotta: '#D97757',
        'off-white': '#FAF8F5',
        'success-green': '#5F8A65',
        peach: '#F5E6D3',
        'mid-gray': '#4A4A4A',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      boxShadow: {
        'brutal': '6px 6px 0 #1A1A1A',
        'brutal-sm': '4px 4px 0 #1A1A1A',
        'brutal-lg': '10px 10px 0 #1A1A1A',
        'brutal-xs': '2px 2px 0 #1A1A1A',
        'brutal-chat': '8px 8px 0 #1A1A1A',
        'brutal-msg': '2px 2px 0 #1A1A1A',
      },
      letterSpacing: {
        'tight-xl': '-2px',
        'tight-lg': '-1px',
      },
    },
  },
  plugins: [],
};
