import { Equal, Expect } from "@type-challenges/utils"

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}


type test = [Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}>>]


// @ts-expect-error
type error = TupleToObject<[[1,2],{}]>