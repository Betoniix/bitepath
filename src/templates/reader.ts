export abstract class Reader<R> {
  abstract read(path: string): R;
}
