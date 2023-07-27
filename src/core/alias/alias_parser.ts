import { cwd } from "process";
import { PathI } from "../../interfaces/path";
import { TsconfigI } from "../../interfaces/tsconfig";
import { Cleaner } from "../../templates/cleaner";
import { Parser } from "../../templates/parser";
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
    const { baseUrl, paths } = this.cleaner.clean(content);
    const aliasSolution: vitepaths = {};

    for (const key in paths) {
      aliasSolution[key] = resolve(currentWD, baseUrl, paths[key][0]);
    }

    return aliasSolution;
  }
}
