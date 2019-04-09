module.exports = {
  coverageDirectory: './coverage',
  setupTestFrameworkScriptFile: './__test__/setup.js',
  coverageThreshold: {
    global: {
      statements: 10,
      branches: 10,
      functions: 10,
      lines: 10,
    },
  },
};
