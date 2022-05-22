type MyReadonly<T> = {
    readonly[P in keyof T]: T[P]
}

interface Todo111 {
    title: string
    description: string
}

type o212o = MyReadonly<Todo111>
const todo11: o212o = {
    title: "Hey",
    description: "foobar"
}

// @ts-expect-error
todo.title = "Hello" // Error: cannot reassign a readonly property

// @ts-expect-error
todo.description = "barFoo" // Error: cannot reassign a readonly property

// @ts-expect-error
todo.name = "barFoo" // Error: cannot reassign a readonly property
