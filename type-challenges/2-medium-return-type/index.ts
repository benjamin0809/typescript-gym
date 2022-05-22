import { Equal, Expect } from "@type-challenges/utils";

type MyReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer U
  ? U
  : never;

const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};
type FnType = typeof fn;
type Result = MyReturnType<FnType>; // should be "1 | 2"
type test = [Expect<Equal<Result, 1 | 2>>];
