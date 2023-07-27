/**
 * Represents a dictionary-like object that maps keys of type string or number to values of type V.
 * @interface
 * @template V - The type of values in the dictionary.
 */
export interface PathI<V> {
  [key: string | number]: V;
}
