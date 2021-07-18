const path = require('path');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // app path
    config.resolve.modules.push(path.resolve('./app'));

    return config;
  },
  pageExtensions: ["page.js", "api.js"],
};
