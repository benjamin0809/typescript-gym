import { Equal, Expect } from "@type-challenges/utils";

type Last<T extends any[]> = T extends [...any[], infer P] ? P : never;

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1

type test = [
  Expect<
    Equal<
        tail1,
      'c'
    >
  >,
  Expect<
    Equal<
    tail2,
      1
    >
  >
];
