import { Equal, Expect } from "@type-challenges/utils";

// 1. { [key: string]: never } 为空对象
// 2. 递归遍历查找 truth 的元素，找到return
type Shift<T extends any[]> = T extends [infer F, ...infer P] ? P : never;

type Result = Shift<[3, 2, 1]> // [2, 1]
type Result1 = Shift<['apple', 'pear', 'blueberry']> // ['pear', 'blueberry']
type test = [
  Expect<
    Equal<
    Result,
    [2, 1]
    >>,
  Expect<
    Equal<
    Result1,
    ['pear', 'blueberry']
    >
  >
];
