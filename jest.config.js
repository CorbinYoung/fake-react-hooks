module.exports = {
  collectCoverageFrom: ['src/**/*.ts', '!src/index.ts', '!src/customTypes.ts'],
  setupFilesAfterEnv: ['./jest/customMatchers.js'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  }
};
