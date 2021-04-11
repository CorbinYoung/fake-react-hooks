module.exports = {
  extends: ['tslint:recommended'],
  rules: {
    ["prettier/prettier"]: ["error"],
    ["no-console"]: "error",
  },
  plugins: ["prettier"]
}