module.exports = {
  extends: [
    "turbo",
    "plugin:sonarjs/recommended",
    "plugin:github/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "sonarjs", "github", "import", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    semi: ["error", "always"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "filenames/match-regex": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "i18n-text/no-en": "off",
    "prettier/prettier": ["error", { singleQuote: true, trailingComma: "all" }],
  },
};
