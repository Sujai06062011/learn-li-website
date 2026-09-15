import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Preview and local browsers hit the dev server as 127.0.0.1, while
  // `next dev --hostname 0.0.0.0` only trusts localhost / 0.0.0.0 by default.
  // Without this, Next 16 returns 403 on /_next chunks and closes the HMR
  // socket with no status — Chrome shows ERR_EMPTY_RESPONSE / connection reset.
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
