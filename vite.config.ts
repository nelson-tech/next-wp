import { defineConfig } from "vite"
import path from "path"
import typescript from "@rollup/plugin-typescript"
import tsconfigPaths from "vite-tsconfig-paths"
import { visualizer } from "rollup-plugin-visualizer"
import progress from "vite-plugin-progress"
import colors from "picocolors"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    typescript({
      declaration: true,
      // exclude: ["test"],
      outDir: "dist",
      // sourceMap: false,
      rootDir: "src",
    }),
    visualizer({
      title: "visualizer - next-wp",
      template: "network",
    }),
    // https://github.com/jeddygong/vite-plugin-progress
    progress({
      format: `Building ${colors.green("[:bar]")} :percent :eta`,
      total: 100,
      width: 60,
    }),
  ],
  server: {
    port: 3123,
  },
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: {
        index: path.resolve(__dirname, "src/index.ts"),
      },
      name: "next-wp",
      formats: ["es", "cjs"],
    },
  },
})
