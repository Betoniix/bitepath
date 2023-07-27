import { TsconfigI } from "../../interfaces/tsconfig.js";
import { Cleaner } from "../../templates/cleaner.js";
import { Parser } from "../../templates/parser.js";
import { Reader } from "../../templates/reader.js";
import { readFileSync, existsSync } from "fs";

export class JsonReader extends Reader<TsconfigI> {
  private parser: Parser<string, TsconfigI>;
  private cleaner: Cleaner<string>;

  constructor(parser: Parser<string, TsconfigI>, cleaner: Cleaner<string>) {
    super();
    this.parser = parser;
    this.cleaner = cleaner;
  }

  read(path: string): TsconfigI {
    if (path === "") throw new ReferenceError("Your path is empty");

    if (!existsSync(path))
      throw new ReferenceError("The file doesnt exist, or the path is wrong");

    const rawstring = readFileSync(path, "utf-8");
    const sanitizedString = this.cleaner.clean(rawstring);
    const jsonParsed = this.parser.parse(sanitizedString);
    const { baseUrl, paths } = jsonParsed.compilerOptions;

    console.log(baseUrl, baseUrl);

    if (!baseUrl || !paths)
      throw ReferenceError(
        `Your tsconfig values containts baseUrl: ${baseUrl} and paths: ${paths}. One or both are undefined`
      );

    return jsonParsed;
  }
}
