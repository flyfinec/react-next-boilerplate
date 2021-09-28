/**
 * .eslintrc.js
 * https://github.com/AlloyTeam/eslint-config-alloy
 * https://nextjs.org/docs/basic-features/eslint
 *
 */

module.exports = {
  extends: ['alloy', 'next'],
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
  rules: {
    // Customize your rules
    indent: ['error', 2],
    'no-unused-vars': 'warn',
  },
};
