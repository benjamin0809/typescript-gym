import { Equal, Expect } from "@type-challenges/utils";

//TODO
// 你的答案
declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{[P in keyof T] : T[P] extends Promise<infer R>? R : T[P]}>

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

type instance = [promise1, promise2, promise3] as const
// expected to be `Promise<[number, 42, string]>`
type res = PromiseAll<instance>

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

