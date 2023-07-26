export abstract class Cleaner<T> {
  abstract clean(content: T): T;
}
