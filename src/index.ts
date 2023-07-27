import { AliasCleaner } from "./core/alias/alias_cleaner.js";
import { JsonCleaner } from "./core/reader/json_cleaner.js";
import { AliasParser } from "./core/alias/alias_parser.js";
import { JsonParser } from "./core/reader/json_parser.js";
import { JsonReader } from "./core/reader/json_reader.js";
import { resolve } from "path";
import { cwd } from "process";

const jsonCleaner = new JsonCleaner();
const jsonParser = new JsonParser();
const aliasCleaner = new AliasCleaner();

const jsonReader = new JsonReader(jsonParser, jsonCleaner);
const aliasParser = new AliasParser(aliasCleaner);

function bitethepaths() {
  const tsFilePath = resolve(cwd(), "tsconfig.json");
  const tsconfig = jsonReader.read(tsFilePath);
  return aliasParser.parse(tsconfig);
}

export default bitethepaths;
