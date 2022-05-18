import { Equal, Expect } from "@type-challenges/utils";

// TODO
type LookUp<U extends object, T extends string, P = U> = U extends U
    ? [U] extends [P]
        ? T extends U[keyof U]
            ? U
            : never
        : never
    : never;

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
