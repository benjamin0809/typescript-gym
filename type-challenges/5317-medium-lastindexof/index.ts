import { ExpectFalse, Expect, Equal } from "@type-challenges/utils";

type LastIndexOf<T extends any[], U, Ans extends any[] = T> = T extends [...infer R, infer L]
  ? L extends U
    ? R['length']
    : LastIndexOf<R, U, Sub<Ans>>
  : -1;

type Sub<T extends any[]> = T extends [infer F, ...infer R] ? R : []

type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2> // 3
type Res2 = LastIndexOf<[0, 0, 0], 2> // -1 

type test = [
  Expect<Equal<Res1, 3>>,
  Expect<Equal<Res2, -1>>
];
