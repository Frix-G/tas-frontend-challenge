module.exports = {
  root: true,
  extends: ['custom/next.js'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/no-misused-promises': 'off',
  },
};
