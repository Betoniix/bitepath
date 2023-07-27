import { PathI } from "../../interfaces/path.js";
import { TsconfigI } from "../../interfaces/tsconfig.js";
import { Cleaner } from "../../templates/cleaner.js";

/**
 * A concrete implementation of the Cleaner class specifically for cleaning TsconfigI objects.
 * @extends {Cleaner<TsconfigI>}
 */
export class AliasCleaner extends Cleaner<TsconfigI> {
  /**
   * Cleans the paths in the TsconfigI object by removing trailing "*" characters.
   * @param {TsconfigI} content - The TsconfigI object to be cleaned.
   * @returns {TsconfigI} The TsconfigI object with sanitized paths.
   * @example
   * const cleaner = new AliasCleaner();
   * const tsConfig = { compilerOptions: { baseUrl: "./src", paths: { "@foo/*": ["./foo/*"] } } };
   * const cleanedTsConfig = cleaner.clean(tsConfig);
   * console.log(cleanedTsConfig);
   * // Output: { compilerOptions: { baseUrl: "./src", paths: { "@foo": ["./foo"] } } }
   */
  clean(content: TsconfigI): TsconfigI {
    const { baseUrl, paths } = { ...content.compilerOptions };
    const sanitizedPaths: PathI<string[]> = {};

    for (const key in paths) {
      const cleanedKey = key.endsWith("/*") ? key.slice(0, -2) : key;
      const cleanedPaths = paths[key].map((path) =>
        path.endsWith("*") ? path.slice(0, -1) : path
      );
      sanitizedPaths[cleanedKey] = cleanedPaths;
    }

    return { compilerOptions: { baseUrl, paths: sanitizedPaths } };
  }
}
