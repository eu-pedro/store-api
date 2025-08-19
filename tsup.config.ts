import { defineConfig } from "tsup";

export default defineConfig({
  entry: { server: "src/server.ts" }, 
  outDir: "dist",
  format: ["esm"],        
  target: "node20",
  platform: "node",
  splitting: false,
  sourcemap: false,
  clean: true,
  minify: false,
  dts: false
});
