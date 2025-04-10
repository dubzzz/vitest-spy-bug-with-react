import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
  },
  resolve: {
    alias: [
      {
        find: /^provider\//,
        replacement: new URL("../provider/src/", import.meta.url).pathname,
      },
    ],
  },
});
