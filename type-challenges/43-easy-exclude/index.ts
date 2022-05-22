import { Equal, Expect } from "@type-challenges/utils"

// T: 元组
type MyExclude<T, U> = T extends U ?  never : T

type Res = MyExclude<'t'|'y','t'>
type Res1 = MyExclude<1|2|3,2>

type test = [Expect<Equal<Res, 'y'>> ,
Expect<Equal<Res1, 1|3>>]