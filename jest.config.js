module.exports = {
  displayName: 'client',
  coverageDirectory: './coverage',
  modulePaths: [
    '<rootDir>/src',
    '<rootDir>/test',
    '<rootDir>/test/modules',
    '<rootDir>/test/utils',
  ],
  setupTestFrameworkScriptFile: require.resolve('./test/setup.js'),
  coverageThreshold: {
    global: {
      statements: 10,
      branches: 10,
      functions: 10,
      lines: 10,
    },
  },
};
