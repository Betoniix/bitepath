import { TsconfigI } from "../../interfaces/tsconfig.js";
import { Parser } from "../../templates/parser.js";

/**
 * Concrete class that implements Parser to parse JSON content into a TypeScript object TsconfigI.
 * @extends {Parser<string, TsconfigI>}
 */
export class JsonParser extends Parser<string, TsconfigI> {
  /**
   * Parses the JSON content and converts it into a TypeScript object TsconfigI.
   * @param {string} content - The JSON content in string format.
   * @returns {TsconfigI} The resulting TypeScript object TsconfigI.
   * @throws {TypeError} If the content is not a valid JSON string.
   */
  parse(content: string): TsconfigI {
    try {
      return JSON.parse(content);
    } catch (error) {
      throw new TypeError("The content isn't a Json stringified");
    }
  }
}
