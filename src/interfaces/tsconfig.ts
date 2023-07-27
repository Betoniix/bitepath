import { PathI } from "./path";

/**
 * Represents the TypeScript compiler options defined in a tsconfig.json file.
 * @interface
 */
export interface TsconfigI {
  compilerOptions: {
    baseUrl: string;
    paths: PathI<string[]>;
  };
}
