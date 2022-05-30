import { Equal, Expect } from "@type-challenges/utils";

//  U extends keyof T 遍历元组 U，即keyof T
type ObjectEntries<T, U = keyof T> = U extends keyof T ? [U, T[U]]: never
interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}
type modelEntries = ObjectEntries<Model>; // ['name', string] | ['age', number] | ['locations', string[] | null];
type Res = ["name", string] | ["age", number] | ["locations", string[] | null];

type test = [Expect<Equal<modelEntries, Res>>];
 
type ObjectToTuple<T, U = keyof T> = U extends keyof T ? U : never

type o = ObjectToTuple<Model>
 

