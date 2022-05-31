import { Equal, Expect } from "@type-challenges/utils";

type RemoveIndexSignature<T> = {
    [k in keyof T as k extends `${infer strK}` ? strK : never]: T[k];
  };

type Foo = {
    [key: string]: any;
    foo(): void;
  }
  
  type A = RemoveIndexSignature<Foo>  // expected { foo(): void }


type test = [
  Expect<
    Equal<
    A,
    { foo(): void }
    >>
];
