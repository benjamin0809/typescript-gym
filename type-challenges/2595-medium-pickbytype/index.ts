
import { Equal, Expect } from "@type-challenges/utils";

type PickByType<T extends object, U> = {
    [P in keyof T as T[P] extends U ? P: never]: U
}

type Result = PickByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }, boolean> // { isReadonly: boolean; isEnable: boolean; }

type test = [
    Expect<
        Equal<
            Result,
            { isReadonly: boolean; isEnable: boolean; }
        >
    >
];