import { Equal, Expect } from "@type-challenges/utils";

type Awaited<T extends Promise<any>> = T extends Promise<infer F> ? F : never;

type Res = Awaited<Promise<string>>;
type Res1 = Awaited<Promise<number>>;

type test = [Expect<Equal<Res, string>>, Expect<Equal<Res1, number>>];
