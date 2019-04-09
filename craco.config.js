const customJestConfig = require('./jest.config');

module.exports = {
  babel: {
    plugins: [
      '@babel/plugin-proposal-optional-chaining',
      'babel-plugin-styled-components',
    ],
  },
  jest: {
    configure: (craJestConfig, { env, paths, resolve, rootDir }) => ({
      ...craJestConfig,
      ...customJestConfig,
    }),
  },
};
