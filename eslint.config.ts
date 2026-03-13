module.exports = {
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

    // desativa regra base
    quotes: "off",

    // usa double quotes
    "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],
  },
};
