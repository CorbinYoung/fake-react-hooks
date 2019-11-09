module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
  extends: ["plugin:prettier/recommended"],
  rules: {
    ["prettier/prettier"]: [
      "error",
      {
        semi: true,
        singleQuote: true,
        printWidth: 120,
        useTabs: true
      }
    ],
    ["no-console"]: "error"
  },
  plugins: ["prettier"]
};
