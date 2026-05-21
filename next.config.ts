const nextConfig = {
  turbopack: {
    root: process.cwd(),
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
