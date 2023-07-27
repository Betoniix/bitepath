/**
 * Abstract class representing a data cleaner that can transform content of type T into a cleaned version of type T.
 * @abstract
 * @template T - The type of content to be cleaned.
 */
export abstract class Cleaner<T> {
  /**
   * Abstract method to clean the given content.
   * @abstract
   * @param {T} content - The content to be cleaned.
   * @returns {T} The cleaned content.
   */
  abstract clean(content: T): T;
}
