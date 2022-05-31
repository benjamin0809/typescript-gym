import { Equal, Expect } from "@type-challenges/utils";

type IsTuple<T> = T extends [infer F, ...infer Rest] ? true : false

type case1 = IsTuple<[number]> // true
type case2 = IsTuple<readonly [number]> // true
type case3 = IsTuple<number[]> // false 


type test = [
    Expect<
        Equal<
        case1,
        true
        >>
];
