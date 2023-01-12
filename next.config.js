const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfiguration = {
  target: 'serverless', //will output independent pages that don't require a monolithic server. It's only compatible with next start or Serverless deployment platforms (like ZEIT Now) — you cannot use the custom server API.
  webpack: (config, { isServer }) => {
    if (!isServer) {
        // set 'fs' to an empty module on the client to prevent this error on build --> Error: Can't resolve 'fs'
        config.node = {
            fs: 'empty'
        }
    }

    return config;}
};

module.exports = withPlugins([optimizedImages], nextConfiguration);
