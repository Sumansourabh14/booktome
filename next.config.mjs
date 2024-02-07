/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [{ hostname: `covers.openlibrary.org` }] },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
