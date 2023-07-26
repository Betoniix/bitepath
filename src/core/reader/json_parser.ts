import { TsconfigI } from "../../interfaces/tsconfig";
import { Parser } from "../../templates/parser";

export class JsonParser extends Parser<string, TsconfigI> {
  parse(content: string): TsconfigI {
    try {
      return JSON.parse(content);
    } catch (error) {
      throw new TypeError("The content isn't a Json stringified");
    }
  }
}
