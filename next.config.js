/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: "/neighbourhood",
      destination:
        "https://drive.google.com/file/d/1UBQYMCu-tU5pVq5E4erYFvJ0TwJcb3Rd/view?usp=drive_link",
      permanent: true,
      basePath: false,
    },
  ],
};

module.exports = nextConfig;
