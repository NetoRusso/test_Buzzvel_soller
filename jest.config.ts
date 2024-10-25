/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';
import nextJest from 'next/jest';
import '@testing-library/jest-dom';



const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js in your test environment
  dir: './',
});

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Adicione esta linha
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!swiper)'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
};

export default createJestConfig(config);
