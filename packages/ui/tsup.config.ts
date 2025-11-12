import {defineConfig} from 'tsup'

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    dts: {
        entry: "src/index.ts",
    },
    sourcemap: true,
    clean: true,
    treeshake: true,
    external: ["react", "react-dom"],
    target: "es2020",
    minify: false,
    splitting: false,
    esbuildOptions(options) {
        options.loader = {
            ".css": "css"
        };
        options.platform = "browser";
    },
});