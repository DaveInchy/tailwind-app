// craco.config.js
module.exports = () => {
  var path = require('path');
  return {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],

      },
    },
    webpack: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@App': path.resolve(__dirname, 'src/App'),
        '@App/Components': path.resolve(__dirname, 'src/App/@Components'),
        '@App/Assets': path.resolve(__dirname, 'src/App/@Assets'),
        '@App/Views': path.resolve(__dirname, 'src/App/@Views'),
      },
    },
  }
}