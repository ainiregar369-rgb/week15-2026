import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/crud": ["./dev.db", "./prisma/dev.db"],
    "/crud/**": ["./dev.db", "./prisma/dev.db"],
  },
};

export default nextConfig;