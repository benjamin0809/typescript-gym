import { Equal, Expect } from "@type-challenges/utils";

type OmitByType<T extends object, U> = {
  [P in keyof T as T[P] extends U ? never : P]: T[P];
};

type OmitBoolean = OmitByType<
  {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  },
  boolean
>; // { name: string; count: number }

type test = [Expect<Equal<OmitBoolean, { name: string; count: number }>>];
