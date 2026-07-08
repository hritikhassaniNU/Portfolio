import fs from "node:fs";
import path from "node:path";

/*
 * ONE build serves two places correctly:
 *   - No custom domain  -> project site at https://<user>.github.io/Portfolio/  (needs basePath)
 *   - Custom domain      -> served at the ROOT of the domain                     (no basePath)
 *
 * The switch is automatic. A custom domain is signalled by public/CNAME — the same
 * file you add when configuring the domain. Present => root. Absent => /Portfolio.
 * You never edit this file to switch. Dev (`next dev`) always runs at the root.
 */
const REPO = "Portfolio";
const cnamePath = path.join(process.cwd(), "public", "CNAME");
const hasCustomDomain =
  fs.existsSync(cnamePath) && fs.readFileSync(cnamePath, "utf8").trim().length > 0;
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd && !hasCustomDomain ? `/${REPO}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: false,
  trailingSlash: true,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};
export default nextConfig;
