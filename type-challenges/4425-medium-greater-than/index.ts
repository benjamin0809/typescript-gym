import { ExpectFalse, Expect } from "@type-challenges/utils";


type GreaterThan<
  T extends number,
  U extends number,
  Ary extends unknown[] = []
> = Ary["length"] extends T
  ? false
  : Ary["length"] extends U
  ? true
  : GreaterThan<T, U, [...Ary, 1]>;

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
