const nextConfig = {
  turbopack: {
    root: process.cwd(),
  },

  images: {
    formats: ["image/avif", "image/webp"] as const,
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000,
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
    ];
  },
};

export default nextConfig;
