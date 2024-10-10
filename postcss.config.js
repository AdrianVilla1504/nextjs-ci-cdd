/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {config: './tailwindcss-config.js'},
  },
};

module.exports = config;
