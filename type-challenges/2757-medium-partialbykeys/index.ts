import { Equal, Expect } from "@type-challenges/utils";

type PartialByKeys<T, U extends string = never> = U extends never ? {
    [P in keyof T]?: T[P]
} :
    {}
interface User {
    name: string
    age: number
    address: string
}

type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }


type test = [
    Expect<
        Equal<
            UserPartialName,
            { name?: string; age: number; address: string }
        >
    >
];