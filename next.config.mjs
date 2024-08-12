/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ["it", "en"],
    defaultLocale: "it",
    localeDetection: true,
  },
};

export default nextConfig;
