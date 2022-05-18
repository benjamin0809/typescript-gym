type Includes<T extends any[], K> = K extends T[number] ? true: false



type Includes1<T extends any[], K> = T[number]

type oo = Includes1<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>