module.exports = {
  parser: "@typescript-eslint/parser",

  parserOptions: {
    project: "./tsconfig.app.json",
  },

  extends: ["airbnb", "airbnb/hooks", "airbnb-typescript"],

  plugins: ["@typescript-eslint"],

  settings: {
    react: {
      version: "detect",
    },
  },

  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
  },
};
