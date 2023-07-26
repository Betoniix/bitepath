import { Path } from "./path";

export interface TsconfigI {
  baseUrl: string;
  paths: Path<string[]>;
}
