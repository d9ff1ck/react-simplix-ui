
import {defineConfig} from "tsup";

export default defineConfig({
    entry: ["./src/index.ts"],
    format: ["esm", "cjs"],

    bundle: true,
    clean: true,
    dts: true,
    external: ["react", "react-dom"],
    minify: true,
    minifyWhitespace: true,
    splitting: true,
    sourcemap: false,
    treeshake: true,

    esbuildOptions(options) {
        options.loader = {
            ".css": "css"
        };
    }
});