import globals from "globals";

export default [
  {
    files: ["**/*.js"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node
      }
    },

    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "semi": ["error", "always"],
      "quotes": ["error", "double"]
    }
  },

  {
    files: ["**/*.test.js"],

    languageOptions: {
      globals: {
        ...globals.jest
      }
    }
  }
];