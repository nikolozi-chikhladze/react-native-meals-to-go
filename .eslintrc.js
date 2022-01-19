module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["@react-native-community"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: [
      2,
      "double",
      {
        avoidEscape: true,
      },
    ],
  },
};
