const {defaults} = require('jest-config');
module.exports = {
  setupFilesAfterEnv: ["<rootDir>/node_modules/@shopify/react-testing/matchers"],
};
