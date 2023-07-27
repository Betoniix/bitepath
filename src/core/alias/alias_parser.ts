import { PathI } from "../../interfaces/path.js";
import { TsconfigI } from "../../interfaces/tsconfig.js";
import { Cleaner } from "../../templates/cleaner.js";
import { Parser } from "../../templates/parser.js";
import { cwd } from "process";
import { resolve } from "path";

/**
 * A concrete implementation of the Parser class specifically for parsing TsconfigI objects into vitepaths objects.
 * @extends {Parser<TsconfigI,vitepaths>}
 */
export class AliasParser extends Parser<TsconfigI, vitepaths> {
  private cleaner: Cleaner<TsconfigI>;

  /**
   * Creates an instance of AliasParser.
   * @param {Cleaner<TsconfigI>} cleaner - The cleaner to be used for preprocessing TsconfigI objects before parsing.
   */
  constructor(cleaner: Cleaner<TsconfigI>) {
    super();
    this.cleaner = cleaner;
  }

  /**
   * Parses the paths in the TsconfigI object and resolves them to absolute paths based on the current working directory and baseUrl.
   * @param {TsconfigI} content - The TsconfigI object to be parsed.
   * @returns {vitepaths} An object containing parsed and resolved alias paths.
   * @example
   * const cleaner = new AliasCleaner();
   * const parser = new AliasParser(cleaner);
   * const tsConfig = { compilerOptions: { baseUrl: "./src", paths: { "@foo": ["./foo"] } } };
   * const vitePaths = parser.parse(tsConfig);
   * console.log(vitePaths);
   * // Output: { "@foo": "/path/to/current/working/dir/src/foo" }
   */
  parse(content: TsconfigI): vitepaths {
    const currentWD = cwd();
    const { baseUrl, paths } = this.cleaner.clean(content).compilerOptions;
    const aliasSolution: vitepaths = {};

    for (const key in paths) {
      aliasSolution[key] = resolve(currentWD, baseUrl, paths[key][0]);
    }

    return aliasSolution;
  }
}

export type vitepaths = PathI<string>;
