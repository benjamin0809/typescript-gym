type MyReadonly1<T> = {
    readonly [P in keyof T]: T[P]
}