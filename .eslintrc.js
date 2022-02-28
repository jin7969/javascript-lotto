module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-alert": "off",
    "import/extensions": ["error", "always"],
    "max-depth": ["error", 2],
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
    "no-new": "off",
<<<<<<< HEAD
=======
    "no-undef": "off",
>>>>>>> 86adc12 (chore: eslint, prettier 환경 설정)
    "lines-between-class-members": "off",
  },
  plugins: ["prettier"],
};