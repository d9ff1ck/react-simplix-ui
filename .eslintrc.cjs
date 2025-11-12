module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    rules: {
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/consistent-type-imports": "warn",
        "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],

        "no-unused-vars": "off",
        "no-empty": "warn",
    },
    ignorePatterns: ["dist", "playground", "*.d.ts"],
};
