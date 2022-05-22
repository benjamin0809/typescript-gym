type MyPic1k<T, K extends keyof T> = {
    [P in K]: T[P]
}