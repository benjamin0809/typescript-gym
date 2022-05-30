import { ExpectFalse, Expect, Equal } from "@type-challenges/utils";

type IndexOf<
  T extends unknown[],
  U,
  Index extends unknown[] = []
> = Index["length"] extends T["length"]
  ? -1
  : Equal<T[Index["length"]], U> extends true
  ? Index["length"]
  : IndexOf<T, U, [...Index, unknown]>;

type Unique<T extends unknown[], Result extends unknown[] = []> = T extends [
  infer F,
  ...infer R
]
  ? IndexOf<Result, F> extends -1
    ? Unique<R, [...Result, F]>
    : Unique<R, [...Result]>
  : Result;

type Res = Unique<[1, 1, 2, 2, 3, 3]>; // expected to be [1, 2, 3]
type Res1 = Unique<[1, 2, 3, 4, 4, 5, 6, 7]>; // expected to be [1, 2, 3, 4, 5, 6, 7]
type Res2 = Unique<[1, "a", 2, "b", 2, "a"]>; // expected to be [1, "a", 2, "b"]
type Res3 = Unique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>; // expected to be [string, number, 1, "a", 2, "b"]
type Res4 = Unique<[unknown, unknown, any, any, never, never]>; // expected to be [unknown, any, never]

type test = [
  Expect<Equal<Res, [1, 2, 3]>>,
  Expect<Equal<Res1, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Res2, [1, "a", 2, "b"]>>,
  Expect<Equal<Res3, [string, number, 1, "a", 2, "b"]>>,
  Expect<Equal<Res4, [unknown, any, never]>>
];
