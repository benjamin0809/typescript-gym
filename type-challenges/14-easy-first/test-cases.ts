import { Equal, Expect } from "@type-challenges/utils"

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]
type arr3 = [3]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
type head3 = First<arr3>

type test = [Expect<Equal<head1, 'a'>> ,
Expect<Equal<head2, 3>>,
Expect<Equal<First<arr3>, 3>>]