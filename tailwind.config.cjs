/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

 const talwin = require('@tailyou/cva/tailwind.config') 
 //console.log("vue",talwin);
 module.exports = {
    darkMode: "class",
    css: [
        './src/assets/css/main.css',
    ],
    content: [

      ...talwin.content,
      '../../packages/vue/src/**/*.{vue,ts,tsx}',
      "./src/**/*.{vue,js,ts,jsx,tsx}",

    ],
    theme: {
      extend: {
        screens:{
          'xs': {'min': '300px', 'max': '639px'},
        },
      }
    },
    
    plugins: [],
    variants: {
      backgroundColor: [
        "dark",
        "dark-hover",
        "dark-group-hover",
        "dark-even",
        "dark-odd"
      ],
      borderColor: ["dark", "dark-focus", "dark-focus-within"],
      textColor: ["dark", "dark-hover", "dark-active"]
    }
  };
  