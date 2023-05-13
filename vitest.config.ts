import path from "path"
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
      "@rest": path.resolve(__dirname, "./src/utils/rest"),
    },
  },
  envPrefix: "NEXT_PUBLIC_",
})
