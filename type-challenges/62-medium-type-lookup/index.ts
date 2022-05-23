import { Equal, Expect } from "@type-challenges/utils";

type LookUp<T, U extends string, P = T> = T extends T ? 
    [T] extends [P] ?
        U extends T[keyof P] ?
        T
        :never
    : never
: never

interface Cat {
    type: 'cat'
    breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
    type: 'dog'
    breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
    color: 'brown' | 'white' | 'black'
}

type MyDogType = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`
type test = [
    Expect<
        Equal<
            MyDogType,
            Dog
        >
    >
];
