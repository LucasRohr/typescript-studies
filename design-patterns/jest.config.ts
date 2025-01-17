import type { Config } from "jest";

const config: Config = {
  collectCoverage: false,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  preset: "@shelf/jest-mongodb",
  roots: ["<rootDir>/src", "<rootDir>/test"],
  transform: { ".+\\.ts$": "ts-jest" },
  moduleNameMapper: {
    "@/tests/(.*)": "<rootDir>/test/$1",
    "@/(.*)": "<rootDir>/src/$1",
  },
};

export default config;
