/** @type {import('next').NextConfig} */
// NOTE: do NOT add `output: 'standalone'` here.
// The nrapken Quick platform patches it in at build time.
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
