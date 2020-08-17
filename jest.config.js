module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: [],
  testEnvironmentOptions: {url: 'https://argo-playground.myshopify.io/'},
  testMatch: ['<rootDir>/packages/**/*.test.ts?(x)'],
  testURL: 'https://argo-playground.myshopify.io/',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
  setupFilesAfterEnv: [
    'jest-extended',
    '<rootDir>/packages/argo-admin-react/test-utils/matchers.ts',
  ],
  moduleNameMapper: {
    '^test-utils/(.*)$': '<rootDir>/packages/argo-admin-react/test-utils/$1',
  },
};
