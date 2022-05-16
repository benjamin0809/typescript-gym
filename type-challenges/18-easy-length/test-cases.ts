import { Equal, Expect } from "@type-challenges/utils"

type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5

type test = [Expect<Equal<teslaLength, 4>> ,
Expect<Equal<spaceXLength, 5>>]