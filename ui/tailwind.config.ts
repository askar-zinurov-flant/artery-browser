import type { Config } from "tailwindcss";

export default {
  content: [
      "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#f5f9f4',
          '100': '#eaf1e7',
          '200': '#d3e3cf',
          '300': '#b0cca9',
          '400': '#85ad7b',
          '500': '#638f58',
          '600': '#537c49',
          '700': '#3f5d38',
          '800': '#354b30',
          '900': '#2d3e29',
          '950': '#152013',
        },
        secondary: {
          '50': '#f9f7f7',
          '100': '#f2eeee',
          '200': '#e7e1e1',
          '300': '#d5cccc',
          '400': '#bcadad',
          '500': '#a59292',
          '600': '#8b7777',
          '700': '#736262',
          '800': '#615353',
          '900': '#544848',
          '950': '#2b2424',
        }
      }
    }
  },

  plugins: [
      require("@tailwindcss/typography"),
    require('flowbite/plugin')
  ]
} as Config;
