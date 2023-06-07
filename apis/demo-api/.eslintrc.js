module.exports = {
  root: true,
  extends: ['custom/nest.js'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    'github/no-then': 'off',
  },
};
