/* import { JestConfigWithTsJest } from "ts-jest"; */

const jestConfig = {
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  testEnvironment: "node",
};

export default jestConfig;

/* export default {
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },

  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  testEnvironment: "node",
};
 */
