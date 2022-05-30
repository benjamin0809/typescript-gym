import { Equal, Expect } from "@type-challenges/utils";

//  U extends keyof T 遍历元组 U，即keyof T
type TupleToNestedObject<T extends any[], U> = T extends [infer F, ...infer Rest] ? { [key in Extract<T[number], F>]: TupleToNestedObject<Rest, U> } : U


type a = TupleToNestedObject<['a'], string> // {a: string}
type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type


type test = [Expect<Equal<a, { a: string }>>];



type pp = Extract<'a'| 'b','a'>