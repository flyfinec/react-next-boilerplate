/**
 * .eslintrc.js
 * https://github.com/AlloyTeam/eslint-config-alloy
 *
 */

module.exports = {
  extends: [
    'alloy',
    'alloy/react',
  ],
  env: {
    // Your environments (which contains several predefined global variables)
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  "plugins": [
    "react-hooks",
  ],
  rules: {
    // Customize your rules
    'indent': [
      'error',
      2,
      { SwitchCase: 1, flatTernaryExpressions: true }
    ],
    "no-unused-vars": "warn",
    // react hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  }
};
