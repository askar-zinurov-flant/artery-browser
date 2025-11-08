import type { Config } from "tailwindcss";

export default {
  content: [
      "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {
      colors: {
        default: '#ffffff',
        primary: {
          '50': '#fff0f0',
          '100': '#ffdede',
          '200': '#ffc3c3',
          '300': '#ff9999',
          '400': '#ff5f5f',
          '500': '#ff2d2d',
          '600': '#f40e0e',
          '700': '#cf0707',
          '800': '#aa0a0a',
          '900': '#8c1010',
          '950': '#4d0202',
        },
        secondary: {
          '50': '#f0f5fe',
          '100': '#dee9fb',
          '200': '#c4daf9',
          '300': '#9bc1f5',
          '400': '#6ca0ee',
          '500': '#4a7fe7',
          '600': '#3562db',
          '700': '#2c4ec9',
          '800': '#2b43a9',
          '900': '#273a81',
          '950': '#1c264f',
        }
      }
    }
  },

  plugins: [
      require("@tailwindcss/typography"),
    require('flowbite/plugin')
  ]
} as Config;
