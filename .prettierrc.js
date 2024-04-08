module.exports = {
  printWidth: 200,
  singleQuote: true,
  trailingComma: "all",
  proseWrap: "never",
  overrides: [{ files: ".prettierrc", options: { parser: "json" } }],
  plugins: [
    require.resolve("prettier-plugin-packagejson"),
    require.resolve("./scripts/prettier-plugin"),
  ],
};
