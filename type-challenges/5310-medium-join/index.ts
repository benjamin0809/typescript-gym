import { ExpectFalse, Expect, Equal } from "@type-challenges/utils";

// F & string 强转换F类型为string
// `${Result}${F & string}` 用模板字符串拼接string
type MyJoin<
  T extends unknown[],
  U extends string | number,
  Result extends string = ""
> = T extends [infer F, ...infer R]
  ? T["length"] extends 1
    ? MyJoin<R, U, `${Result}${F & string}`>
    : MyJoin<R, U, `${Result}${F & string}${U}`>
  : Result;

// your answers
type Join<T extends unknown[], U extends string | number> = T extends [
  infer First,
  ...infer Rest
]
  ? `${First & string}${Rest["length"] extends 0 ? "" : U}${Join<Rest, U>}`
  : "";

type Res = MyJoin<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'
type Res1 = Join<["Hello", "World"], " ">; // expected to be 'Hello World'
type Res2 = Join<["2", "2", "2"], 1>; // expected to be '21212'
type Res3 = Join<["o"], "u">; // expected to be 'o'
