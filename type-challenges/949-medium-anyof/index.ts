import { Equal, Expect } from "@type-challenges/utils";

// 1. { [key: string]: never } 为空对象
// 2. 递归遍历查找 truth 的元素，找到return
type AnyOf<T extends any[]> = T extends [infer First, ...infer Rest]
? [First] extends [0 | "" | [] | { [key: string]: never } | false] ? AnyOf<Rest> : true
: false


type Sample1 = AnyOf<[1, '', false, [], {}]> // expected to be true.
type Sample2 = AnyOf<[0, '', false, [], {}]> // expected to be false.

type test = [
  Expect<
    Equal<
    Sample1,
    true
    >>,
  Expect<
    Equal<
    Sample2,
    false
    >
  >
];
