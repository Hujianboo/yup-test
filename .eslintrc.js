module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
  ],
  overrides: [
    {
      files: ["**/*.{ts,tsx}"], // 只处理 ts 和 js 文件
      parser: "@typescript-eslint/parser", // 能看懂 TypeScript
      parserOptions: {
        project: ["./tsconfig.json"], // 告诉 eslint：tsconfig 在哪
      },
      extends: [
        // typescript-eslint 的推荐规则，只是这些最佳规则都是针对 TS 的
        "plugin:@typescript-eslint/recommended",
        // tsconfig.json 里 Type Checking 的推荐规则
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      plugins: ["@typescript-eslint"],
    },
  ],
};
