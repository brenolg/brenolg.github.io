export default {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  parser: "@typescript-eslint/parser",

  extends: ["plugin:react/recommended", "airbnb", "airbnb-typescript"],

  parserOptions: {
    project: "./tsconfig.app.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },

  plugins: ["react", "@typescript-eslint"],

  rules: {
    "react/jsx-props-no-spreading": "off",

    quotes: ["error", "single", { avoidEscape: true }],
    "@typescript-eslint/quotes": ["error", "single", { avoidEscape: true }],
  },
};
