module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: ['<rootDir>/packages/app-extensions-libs/dist'],
  testEnvironmentOptions: {url: 'https://app-extensions-libs.myshopify.io/'},
  testMatch: ['<rootDir>/packages/**/*.test.ts?(x)'],
  testURL: 'https://app-extensions-libs.myshopify.io/',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ["jest-extended", "@shopify/react-testing/matchers"]
};
