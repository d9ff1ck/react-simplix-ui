// @ts-nocheck
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import prettierConfig from "eslint-config-prettier";

const config = [
    {
        ignores: ["dist", "node_modules", "*.d.ts", "coverage"],
    },

    {
        files: ["src/**/*.{ts,tsx}"],

        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: "module",
            },
        },

        plugins: {
            "@typescript-eslint": tsPlugin,
            "react-hooks": reactHooks,
            import: importPlugin,
        },

        rules: {
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/consistent-type-imports": "warn",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {varsIgnorePattern: "^_", argsIgnorePattern: "^_"},
            ],

            "no-console": ["warn", {allow: ["warn", "error"]}],
            "no-empty": "warn",

            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",

            "import/no-duplicates": "error",
            "import/order": [
                "warn",
                {
                    groups: [
                        "builtin",
                        "external",
                        "internal",
                        ["parent", "sibling"],
                        "index",
                    ],
                    alphabetize: {order: "asc", caseInsensitive: true},
                    "newlines-between": "always",
                },
            ],
        },
    },

    prettierConfig
];

export default config;