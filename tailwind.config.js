/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{html,js,ts,jsx,tsx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
      scale: {
        '165': '1.65',
      },
    },
  },
  plugins: [],
}


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './app/**/*.{html,js,jsx}',
//     './components/**/*.{html,js,jsx}',
//     './sections/**/*.{html,js,jsx}',
//     './styles/**/*.{js,jsx}',
//   ],
//   mode: 'jit',
//   theme: {
//     extend: {
//       colors: {
//         'primary-black': '#1A232E',
//         'secondary-white': '#c7c7c7',
//       },
//       transitionTimingFunction: {
//         'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
//       },
//     },
//   },
//   plugins: [],
// };