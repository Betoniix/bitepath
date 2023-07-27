/**
 * Abstract class representing a data parser that can transform content of type T into a parsed version of type R.
 * @abstract
 * @template T - The type of content to be parsed.
 * @template R - The type of the parsed result.
 */
export abstract class Parser<T, R> {
  /**
   * Abstract method to parse the given content.
   * @abstract
   * @param {T} content - The content to be parsed.
   * @returns {R} The parsed result.
   */
  abstract parse(content: T): R;
}
