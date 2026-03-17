import type { NextConfig } from "next";

const isGhPages = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.NEXT_PUBLIC_REPO_NAME || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGhPages ? `/${repoName}` : "",
  assetPrefix: isGhPages ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
