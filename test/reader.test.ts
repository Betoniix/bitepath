import { JsonParser } from "../src/core/reader/json_parser";
import { JsonReader } from "../src/core/reader/json_reader";
import { JsonCleaner } from "../src/core/reader/json_cleaner";

describe("Json reader, Json Parser, Json Cleaner", () => {
  const jsonParser = new JsonParser();
  const jsonCleaner = new JsonCleaner();
  const jsonReader = new JsonReader(jsonParser, jsonCleaner);

  it("Json Cleaner", () => {
    test("empty string", () => {
      expect(jsonCleaner.clean("")).toBe("");
    });

    test("empty string json", () => {
      expect(jsonCleaner.clean("{}")).toBe("{}");
    });
  });

  it("Json Parser", () => {});

  it("Json Reader", () => {});
});
