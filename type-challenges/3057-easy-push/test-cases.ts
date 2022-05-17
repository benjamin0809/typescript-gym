import { Equal, Expect } from "@type-challenges/utils"


type Result = Push<[1, 2], '3'> // [1, 2, '3']


type test = [Expect<Equal<Result, [1, 2, '3']>>]
