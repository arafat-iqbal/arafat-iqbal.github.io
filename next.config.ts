import type { NextConfig } from "next";

// For personal root GitHub Pages (https://<username>.github.io), basePath is ""
// If hosted under a sub-repository, NEXT_PUBLIC_BASE_PATH can be passed
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
