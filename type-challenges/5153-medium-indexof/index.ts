import { ExpectFalse, Expect, Equal } from "@type-challenges/utils";

type IndexOf<
  T extends any[],
  U extends any,
  Index extends any[] = []
> = Index["length"] extends T["length"]
  ? -1
  : Equal<T[Index["length"]], U> extends true
  ? Index["length"]
  : IndexOf<T, U, [...Index, any]>;

type Res = IndexOf<[1, 2], 1>; // expected to be 0
type Res1 = IndexOf<[1, 2, 4, 1, 5], 6>; // expected to be -1
type Res2 = IndexOf<[2, 3, 2, 3, 2, 3, 2, 3], 3>; // expected to be 1

type test = [
  Expect<Equal<Res, 0>>,
  Expect<Equal<Res1, -1>>,
  Expect<Equal<Res2, 1>>
];
