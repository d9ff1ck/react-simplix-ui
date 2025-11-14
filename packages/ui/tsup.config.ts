import {defineConfig} from 'tsup'

export default defineConfig({
    entry: ["src/index.ts"],

    format: ["esm", "cjs"],
    target: "es2020",

    sourcemap: true,
    clean: true,
    bundle: true,

    dts: true,

    external: ["react", "react-dom"],

    minify: false,

    esbuildOptions(options) {
        options.platform = "browser";
        options.loader = {
            ".css": "css"
        };
    },
});