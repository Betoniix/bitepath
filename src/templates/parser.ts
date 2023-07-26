export abstract class Parser<T, R> {
  abstract parse(content: T): R;
}
