/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // this is added in order to docker run
  output: 'standalone',
  // Adding policies:
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // force HTTPS
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Permissions-Policy",
            value:
            "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          // for older browsers that dont support CSP
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          // CSP needs experimenting
          // {
          //   key: "Content-Security-Policy",
          //   value:
          //     "default-src 'self'; script-src 'self' 'unsafe-inline'; script-src-elem 'unsafe-inline'; style-src 'unsafe-inline'; style-src-elem 'self' 'unsafe-inline' ",
          // },
          // {
          //   key: "Content-Security-Policy",
          //   value:
          //     "default-src 'self' 'http://blog.logrocket.com'; image-src 'self' 'https://unsplash.com'; script-src 'self' 'https://www.google-analytics.com'; font-src 'self' 'https://fonts.googleapis.com'",
          // },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
