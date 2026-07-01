import type { NextConfig } from "next";

// Static export — outputs plain HTML/CSS/JS to `out/`, deployable to any
// static host (Netlify, GitHub Pages, S3) with zero server runtime.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
