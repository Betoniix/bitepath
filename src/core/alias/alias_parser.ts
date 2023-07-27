import { PathI } from "../../interfaces/path.js";
import { TsconfigI } from "../../interfaces/tsconfig.js";
import { Cleaner } from "../../templates/cleaner.js";
import { Parser } from "../../templates/parser.js";
import { cwd } from "process";
import { resolve } from "path";

export type vitepaths = PathI<string>;

export class AliasParser extends Parser<TsconfigI, vitepaths> {
  private cleaner: Cleaner<TsconfigI>;

  constructor(cleaner: Cleaner<TsconfigI>) {
    super();
    this.cleaner = cleaner;
  }

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
