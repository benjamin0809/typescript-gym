import { Equal, Expect } from "@type-challenges/utils";

type TupleToUnion<T> = T extends [infer P, ...infer K] ? P | TupleToUnion<K> : never

type Arr = ["1", "2", "3"];

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'

type test = [Expect<Equal<Test, "1" | "2" | "3">>];
