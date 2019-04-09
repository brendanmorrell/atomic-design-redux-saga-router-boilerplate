module.exports = {
  displayName: 'client',
  coverageDirectory: './coverage',
  modulePaths: ['<rootDir>/test/utils'],
  setupTestFrameworkScriptFile: require.resolve('./test/setup.js'),
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
};
