import { TsconfigI } from "../../interfaces/tsconfig.js";
import { Cleaner } from "../../templates/cleaner.js";
import { Parser } from "../../templates/parser.js";
import { Reader } from "../../templates/reader.js";
import { readFileSync, existsSync } from "fs";

/**
 * Concrete class that implements Reader to read and process JSON content from a file.
 * @extends {Reader<TsconfigI>}
 */
export class JsonReader extends Reader<TsconfigI> {
  private parser: Parser<string, TsconfigI>;
  private cleaner: Cleaner<string>;

  /**
   * Creates an instance of JsonReader.
   * @param {Parser<string, TsconfigI>} parser - The parser to be used for converting JSON into a TsconfigI object.
   * @param {Cleaner<string>} cleaner - The cleaner to be used for removing comments from JSON.
   */
  constructor(parser: Parser<string, TsconfigI>, cleaner: Cleaner<string>) {
    super();
    this.parser = parser;
    this.cleaner = cleaner;
  }

  /**
   * Reads JSON content from a file at the specified path, processes it, and returns a TypeScript object TsconfigI.
   * @param {string} path - The path of the file to be read.
   * @returns {TsconfigI} The TypeScript object TsconfigI obtained from the JSON content in the file.
   * @throws {ReferenceError} If the path is empty or the file does not exist.
   * @throws {ReferenceError} If the obtained TypeScript object TsconfigI does not contain valid values for baseUrl and paths.
   */
  read(path: string): TsconfigI {
    if (path === "") throw new ReferenceError("Your path is empty");

    if (!existsSync(path))
      throw new ReferenceError("The file doesnt exist, or the path is wrong");

    const rawstring = readFileSync(path, "utf-8");
    const sanitizedString = this.cleaner.clean(rawstring);
    const jsonParsed = this.parser.parse(sanitizedString);
    const { baseUrl, paths } = jsonParsed.compilerOptions;

    if (!baseUrl || !paths)
      throw ReferenceError(
        `Your tsconfig values contain baseUrl: ${baseUrl} and paths: ${paths}. One or both are undefined`
      );

    return jsonParsed;
  }
}
