import * as js from "@eslint/js";
import * as prettierConfig from "eslint-config-prettier";
import * as importPlugin from "eslint-plugin-import";
import * as prettierPlugin from "eslint-plugin-prettier";
import * as react from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import * as globals from "globals";
import * as tseslint from "typescript-eslint";

export default defineConfig([
    {
        ignores: ["dist", "node_modules", "*.d.ts", "coverage"],
    },

    {
        files: ["**/*.{js,mjs,cjs}"],
        plugins: {
            js,
            prettier: prettierPlugin,
        },
        extends: [js.configs.recommended, prettierConfig],
        languageOptions: {
            globals: globals.browser,
        },
    },

    react.configs.flat.recommended,
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: "module",
            },
            globals: globals.browser,
        },
        plugins: {
            prettier: prettierPlugin,
            "@typescript-eslint": tseslint.plugin,
            import: importPlugin,
        },
        extends: [...tseslint.configs.recommended, prettierConfig],
        rules: {
            ...prettierPlugin.rules,
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/consistent-type-imports": "warn",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    varsIgnorePattern: "^_",
                    argsIgnorePattern: "^_",
                },
            ],

            "no-console": ["warn", { allow: ["warn", "error"] }],
            "no-empty": "warn",

            "import/no-duplicates": "error",
            "import/order": [
                "warn",
                {
                    groups: ["builtin", "external", "internal", ["parent", "sibling"], "index"],
                    alphabetize: { order: "asc", caseInsensitive: true },
                    "newlines-between": "always",
                },
            ],
            "react/react-in-jsx-scope": "off",
            "react/jsx-uses-react": "off",
        },
    },
]);
