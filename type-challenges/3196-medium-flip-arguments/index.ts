import { Equal, Expect } from "@type-challenges/utils";


type Reverse<T extends unknown[], U extends unknown[] = []> = T extends [...infer F, infer L] ? Reverse<F, [...U, L]> : U

type FlipArguments<T extends Function> = T extends (... args: infer Args) => infer Res ? (...args: Reverse<Args>) => Res : never

type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void> 
// (arg0: boolean, arg1: number, arg2: string) => void

type test = [Expect<Equal<Flipped, (arg0: boolean, arg1: number, arg2: string) => void>>];



type pp = Extract<'a'| 'b','a'>