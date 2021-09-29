const path = require('path');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // app path
    config.resolve.modules.push(path.resolve('./app'));

    return config;
  },
  eslint: {
    dirs: ['pages', 'app'], // Only run ESLint on the 'pages' and 'app' directories during production builds (next build)
  },
  pageExtensions: ['page.js', 'api.js'],
};
