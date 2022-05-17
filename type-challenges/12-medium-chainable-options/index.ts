import { Equal, Expect } from "@type-challenges/utils";

declare const config: Chainable

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// expect the type of result to be:
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}

type Chainable<T> = T extends [infer P, ...infer K] ? P | TupleToUnion<K> : never

type test = [Expect<Equal<Test, "1" | "2" | "3">>];
