import { Equal, Expect } from "@type-challenges/utils"

type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'


type test = [Expect<Equal<A, 'a'>> ,
Expect<Equal<B, 'b'>>]

