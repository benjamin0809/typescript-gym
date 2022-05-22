type MyExclude<T, U> = T extends U ? never: T

type MyReadonly2<T, U extends keyof T = keyof T> = {
    readonly [P in U]: T[P]
} & { [P in MyExclude<keyof T,U>]: T[P] };

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type Result = MyReadonly2<Todo, "title" | "description">
const todo1: MyReadonly2<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

// @ts-expect-error
todo1.title = "Hello"; // Error: cannot reassign a readonly property
// @ts-expect-error
todo1.description = "barFoo"; // Error: cannot reassign a readonly property

todo1.completed = true; // OK
