import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(
        "https://images.unsplash.com/photo-1726056652752-58303aafa0c1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ),
      new URL(
        "https://arweave.net/lZ5FdIVagNoNvI4QFoHhB6Xyn4oVGLV9xOTW32WBC20"
      ),
    ],
  },
};

export default nextConfig;
