
import { Equal, Expect } from "@type-challenges/utils";

type Merge<T extends object, U extends object> = {
    [P in keyof (T & U)]: P extends keyof U ? U[P] : P extends keyof T ? T[P] : never
}

type foo = {
    name: string;
    age: string;
}
type coo = {
    age: number;
    sex: string
}

type Result = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string} 
type test = [
    Expect<
        Equal<
            Result,
            {
                name: string,
                age: number,
                sex: string
            }
        >
    >
];