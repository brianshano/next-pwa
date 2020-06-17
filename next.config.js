const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    // disable: false,
    register: true,
    // scope: '/app',
    // sw: 'service-worker.js',
    //...
    runtimeCaching: [
      // For now, request everything from network first.
      // TODO cache specific file types by default once app is more established
      {
        urlPattern: /^https?.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "https-calls",
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: /.*/i,
        handler: "NetworkFirst",
        options: {
          cacheName: "others",
          expiration: {
            maxEntries: 16,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
          },
        },
      },
    ],
  },
});
