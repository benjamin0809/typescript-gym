import { ExpectFalse, Expect, Equal } from "@type-challenges/utils";


type isInclude<T extends any[], U> = T extends [infer F, ...infer R]
  ? F extends U
    ? true
    : isInclude<R, U>
  : false;

 // 遍历T，不在U则放入 Result，最后返回Result
type WithoutArray<
  T extends any[],
  U extends any[],
  Result extends any[] = []
> = T extends [infer F, ...infer R]
  ? isInclude<U, F> extends true
    ? WithoutArray<R, U, Result>
    : WithoutArray<R, U, [...Result, F]>
  : Result;

type Without<T extends any[], U> = U extends any[]
  ? WithoutArray<T, U>
  : WithoutArray<T, [U]>;

type Res = Without<[1, 2], 1>; // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []

type test = [
  Expect<Equal<Res, [2]>>,
  Expect<Equal<Res1, [4, 5]>>,
  Expect<Equal<Res2, []>>
];
