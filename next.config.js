/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: "/neighbourhood",
      destination:
        "https://drive.google.com/file/d/1IW0VC1f_wkAP5YcHwZcjbXYolqOP34Fq/view?usp=drive_link",
      permanent: true,
      basePath: false,
    },
  ],
};

module.exports = nextConfig;
