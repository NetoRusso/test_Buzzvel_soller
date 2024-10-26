module.exports = { 
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy', // Para CSS
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/_mocks_/fileMock.ts', // Para imagens
  },

};