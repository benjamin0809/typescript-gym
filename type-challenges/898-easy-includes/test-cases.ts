import { Equal, Expect } from "@type-challenges/utils"

type Result1 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
type Result2 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Santana'> // expected to be `true`

type test = [Expect<Equal<Result1, false>>, Expect<Equal<Result2, true>>]
