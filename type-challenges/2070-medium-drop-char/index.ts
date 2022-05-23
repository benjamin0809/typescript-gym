import { Equal, Expect } from "@type-challenges/utils";

type DropChar<T extends string, U extends string, Ans extends string = ''> = T extends `${infer F}${infer R}`
? F extends U ? DropChar<R, U, `${Ans}`> : DropChar<R, U, `${Ans}${F}`>
: Ans
type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'
type test = [
  Expect<
    Equal<
    Butterfly,
    'butterfly!'
    >
  >
];
