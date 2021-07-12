module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  coverageReporters: ['json', 'lcov'],
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    '**/src/**/*.{js,ts,tsx}',
    '**/src/*.{js,ts,tsx}',
    '!**/*.test.{ts,tsx}',
    '!**/*.d.ts',
  ],
};
