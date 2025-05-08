// next.config.js
import { withYak } from "next-yak/withYak";

const nextConfig = {
  images: {
    disableStaticImages: true,
  },
  webpack(config) {
     // treats AVIF files as regular assets
    config.module.rules.push({
      test: /\.(avif)$/i,
      type: "asset/resource",
    });

    return config;
  },
};

export default withYak({
  turbopack: true,
},nextConfig);
