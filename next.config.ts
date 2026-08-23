const nextConfig = {
  turbopack: {
    root: process.cwd(),
  },

  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"] as ("image/avif" | "image/webp")[],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000,
  },

  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/umzuege/privatumzug",
        destination: "/privatumzug-landshut",
        permanent: true,
      },
      {
        source: "/umzuege/firmenumzug",
        destination: "/firmenumzug-landshut",
        permanent: true,
      },
      {
        source: "/entruempelung",
        destination: "/entruempelung-landshut",
        permanent: true,
      },
      {
        source: "/umzugsunternehmen",
        destination: "/umzugsunternehmen-landshut",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
