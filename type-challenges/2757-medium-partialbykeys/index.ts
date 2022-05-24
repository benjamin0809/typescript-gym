import { Equal, Expect } from "@type-challenges/utils";

type Merge<T, U> = Pick<T & U, keyof (T & U)>;

type PartialByKeys<T, K = keyof T> = Merge<
  Pick<Partial<T>, Extract<keyof T, K>>,
  Pick<T, Exclude<keyof T, K>>
>;

interface User {
  name: string;
  age: number;
  address: string;
}

type UserPartialName = PartialByKeys<User, "name">; // { name?:string; age:number; address:string }
type test = [
  Expect<
    Equal<UserPartialName, { name?: string; age: number; address: string }>
  >
];
