// .eslintrc.js
module.exports = {
    extends: "next/core-web-vitals",
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      "eqeqeq": "error",
      "react/react-in-jsx-scope": "off", // Next.js doesn’t need `React` imports
      "semi": ["error", "always"],       // Enforces semicolons
      "quotes": ["error", "single"],     // Enforces single quotes
      "prefer-const": "error",           // Use const for variables that don't change
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }
  };
  