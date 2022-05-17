import { Equal, Expect } from "@type-challenges/utils"


type Result = Concat<[1], [2]> // expected to be [1, 2]

type test = [Expect<Equal<Result, [1,2]>>]

