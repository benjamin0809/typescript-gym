import { Equal, Expect } from "@type-challenges/utils"

type MyPick<T, U extends keyof T> = {
    [P in U]: T[P]
}

interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todoa: TodoPreview = {
    title: 'Clean room',
    completed: false,
}

type test = [Expect<Equal<TodoPreview, { title: string, completed: boolean}>>]

