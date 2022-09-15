import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "react-native",
  testTimeout: 60000,
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  clearMocks: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)",
  ],
};

export default config;
