import { ExpectFalse, Expect } from "@type-challenges/utils";

// your answers
type Without<T extends any[], U extends any> =
  U extends any[] ? WithoutArray<T, U> : WithoutArray<T, [U]>

type WithoutArray<T extends any[], U extends any[], Ans extends any[] = []> =
  T extends [infer F, ...infer Rest]
  ? isInclude<U, F> extends false ? WithoutArray<Rest, U, [...Ans, F]> : WithoutArray<Rest, U, Ans>
  : Ans

type isInclude<T extends any, N> = T extends [infer F, ...infer Rest] ? F extends N ? true : isInclude<Rest, N> : false
type test = [
  Expect<
    GreaterThan<2, 1>
  >,
  ExpectFalse<
    GreaterThan<1, 1>
  >,
  ExpectFalse<
    GreaterThan<10, 100>
  >,
  Expect<
    GreaterThan<111, 11>
  >
];
