import { Equal, Expect } from "@type-challenges/utils"

type Result = Unshift<[1, 2], 0> // [0, 1, 2]

type test = [Expect<Result extends [0, 1, 2] ? true: false>]

