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
      {
        find: /^test-helpers\//,
        replacement: new URL("../test-helpers/src/", import.meta.url).pathname,
      },
    ],
  },
});
