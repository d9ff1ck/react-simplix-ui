import {defineConfig} from "tsup";

export default defineConfig({
    entry: {
        index: "src/index.ts"
    },
    format: ["esm", "cjs"],

    bundle: true,
    clean: true,
    dts: {
        entry: "src/index.ts",
        compilerOptions: {
            project: "tsconfig.library.json"
        }
    },
    external: ["react", "react-dom"],
    minify: true,
    minifyWhitespace: true,
    splitting: true,
    sourcemap: false,
    treeshake: true,
    tsconfig: "./tsconfig.node.json",

    esbuildOptions(options) {
        options.loader = {
            ".css": "css"
        };
    }
});