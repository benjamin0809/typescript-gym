import { Equal, Expect } from "@type-challenges/utils";


type Reverse<T extends unknown[], U extends unknown[] = []> = T extends [...infer F, infer L] ? Reverse<F, [...U, L]> : U


 
type a = Reverse<['a', 'b']> // ['b', 'a']
type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']

type test = [Expect<Equal<a, ['b', 'a']>>,
Expect<Equal<b, ['c', 'b', 'a']>>];



type pp = Extract<'a'| 'b','a'>