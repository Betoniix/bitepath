import { PathI } from "./path";

export interface TsconfigI {
  compilerOptions: {
    baseUrl: string;
    paths: PathI<string[]>;
  };
}
