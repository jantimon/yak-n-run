// next.config.js
import { withYak } from "next-yak/withYak";

const nextConfig = {
  output: 'export',
  images: {
    disableStaticImages: true,
  },
  webpack(config) {
    // Add AVIF file handling
    config.module.rules.push({
      test: /\.(avif)$/i,
      type: "asset/resource", // This treats AVIF files as regular assets
    });

    return config;
  },
};

export default withYak(nextConfig);
