import { PathI } from "../../interfaces/path.js";
import { TsconfigI } from "../../interfaces/tsconfig.js";
import { Cleaner } from "../../templates/cleaner.js";

export class AliasCleaner extends Cleaner<TsconfigI> {
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
