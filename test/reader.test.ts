import { JsonParser } from "../src/core/reader/json_parser";
import { JsonReader } from "../src/core/reader/json_reader";
import { JsonCleaner } from "../src/core/reader/json_cleaner";

describe("Json Reader Feature", () => {
  const jsonParser = new JsonParser();
  const jsonCleaner = new JsonCleaner();
  const jsonReader = new JsonReader(jsonParser, jsonCleaner);

  describe("Testing Json cleaner module", () => {
    it("Should empty string if content is empty", () => {
      expect(jsonCleaner.clean("")).toBe("");
    });

    it("empty json string", () => {
      expect(jsonCleaner.clean("{/* hola */}")).toStrictEqual("{}");
    });
  });

  describe("Testing json parser module", () => {
    it("Should throw error if json isn't valid", () => {
      expect(() => jsonParser.parse("")).toThrowError();
    });

    it("Should empty JSON if content is empty JSON", () => {
      expect(jsonParser.parse("{}")).toStrictEqual({});
    });
  });

  describe("Testing Json Reader component", () => {
    it("Throw Reference Error if file doesn't exist file", () => {
      expect(() => jsonReader.read("./tsconfig.ts")).toThrowError();
    });

    it("Throw Reference Error if path is empty", () => {
      expect(() => jsonReader.read("")).toThrowError();
    });
  });
});
