import stripJsonComments from "strip-json-comments";
import { Cleaner } from "../../templates/cleaner";

export class JsonCleaner extends Cleaner<string> {
  clean(content: string): string {
    return stripJsonComments(content);
  }
}
