import stripJsonComments from "strip-json-comments";
import { Cleaner } from "../../templates/cleaner.js";

/**
 * Concrete class that implements Cleaner to clean JSON content by removing comments.
 * @extends {Cleaner<string>}
 */
export class JsonCleaner extends Cleaner<string> {
  /**
   * Cleans the JSON content by removing comments.
   * @param {string} content - The JSON content in string format.
   * @returns {string} The cleaned JSON content without comments.
   */
  clean(content: string): string {
    return stripJsonComments(content, { whitespace: false });
  }
}
