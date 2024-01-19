/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: "/neighbourhood",
      destination: "https://www.youtube.com/watch?v=qidFgFfNroc",
      permanent: true,
      basePath: false,
    },
  ],
};

module.exports = nextConfig;
