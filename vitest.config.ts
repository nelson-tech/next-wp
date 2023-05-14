import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
  envPrefix: "NEXT_PUBLIC_",
})
