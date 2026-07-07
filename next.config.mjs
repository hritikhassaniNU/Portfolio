/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // static HTML export for GitHub Pages
  images: { unoptimized: true },
  reactStrictMode: false,    // avoids double-running the imperative home init in dev
  trailingSlash: true,       // stable routing on static hosts
  // If you deploy to a PROJECT repo (served at /repo-name/) instead of a
  // user site, uncomment and set these, and update absolute URLs in app/layout.tsx:
  // basePath: "/repo-name",
  // assetPrefix: "/repo-name/",
};
export default nextConfig;
