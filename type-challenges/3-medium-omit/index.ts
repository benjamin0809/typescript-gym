import { Equal, Expect } from "@type-challenges/utils";

// T tuple
type MyExclude<T,U> = T extends U ? never: T
type MyOmit<T, U extends keyof T> = {
    [P in MyExclude<keyof T, U>]: T[P]
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false
};
type test = [
  Expect<
    Equal<
      TodoPreview,
      {
        completed: boolean;
      }
    >
  >
];
