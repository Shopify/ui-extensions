module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    // '^test/helper$': '<rootDir>/test/helper.ts',
    '^@shopify/app-extensions-libs/(.*)$': '<rootDir>/packages/app-extensions-libs/src/$1',
    '^@shopify/app-extensions-libs$': '<rootDir>/packages/app-extensions-libs/src/index.ts',
  },
  modulePathIgnorePatterns: ['<rootDir>/packages/app-extensions-libs/dist'],
  // setupFiles: ['<rootDir>/test/setup.ts'],
  testEnvironmentOptions: {url: 'https://app-extensions-libs.myshopify.io/'},
  testMatch: ['<rootDir>/packages/**/*.test.ts?(x)'],
  testURL: 'https://app-extensions-libs.myshopify.io/',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ["jest-extended"]
};
