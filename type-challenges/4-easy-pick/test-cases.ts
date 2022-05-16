import { Equal, Expect } from "@type-challenges/utils"

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

