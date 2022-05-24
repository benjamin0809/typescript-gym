import { Equal, Expect } from "@type-challenges/utils";

type ObjectEntries<T, U = keyof T> = U extends keyof T ? [U, T[U]] : never;
interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}
type modelEntries = ObjectEntries<Model>; // ['name', string] | ['age', number] | ['locations', string[] | null];
type Res = ["name", string] | ["age", number] | ["locations", string[] | null];

type test = [Expect<Equal<modelEntries, Res>>];
