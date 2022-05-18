import { Equal, Expect } from "@type-challenges/utils";

type Pop<T extends any[]> = T extends [...infer U, infer P] ? U : never;

type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]

type test = [
  Expect<
    Equal<
    re1,
    ['a', 'b', 'c']
    >
  >,
  Expect<
    Equal<
    re2,
        [3, 2]
    >
  >
];
