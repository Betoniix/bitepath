/**
 * Abstract class that defines the behavior of a generic reader.
 * @abstract
 * @template R - The type of result to be obtained when reading the content.
 */
export abstract class Reader<R> {
  /**
   * Abstract method that must be implemented by subclasses to read content from a specified path.
   * @abstract
   * @param {string} path - The path or location of the file or external resource to be read.
   * @returns {R} The result obtained from reading the content from the file or resource.
   */
  abstract read(path: string): R;
}
