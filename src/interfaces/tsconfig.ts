import { PathI } from "./path";

export interface TsconfigI {
  baseUrl: string;
  paths: PathI<string[]>;
}
