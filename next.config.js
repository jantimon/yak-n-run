// next.config.js
import { withYak } from "next-yak/withYak";

const nextConfig = {
  images: {
    disableStaticImages: true, // This prevents Next.js from automatically optimizing imported images
    // If you still want to use Next.js Image component elsewhere but handle .avif files differently:
    // formats: ['image/avif', 'image/webp'], // Include AVIF format in supported formats
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
