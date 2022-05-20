import { Equal, Expect } from "@type-challenges/utils";

// 1. { [key: string]: never } 为空对象

type FlattenOnce<T extends any[]> = T extends [infer F, ...infer P]
?
F extends any[] ? [...F, ...FlattenOnce<P>] : [F, ...FlattenOnce<P>] 
:
T;

type Flatten<T extends any[]> =
  T extends [infer F, ...infer R]
  ? F extends any[] ? [...F, ...Flatten<R>] : [F, ...Flatten<R>]
  : T

 
// CurrDeep: 计数器，利用数组得长度为计数属性； [...CurrDeep, any] 表示加1
type FlattenDepth<T extends any[], Deep = 1, CurrDeep extends any[] = []> =
  CurrDeep['length'] extends Deep ? T :
  CurrDeep['length'] extends T['length'] ? T :
  FlattenDepth<Flatten<T>, Deep, [...CurrDeep, any]>


type R1 = FlattenOnce<[1, 2, [3, 4], [[[5]]]]>
type R2 = Flatten<[1, 2, [3, 4], [[[5]]]]>

type Result = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
type Result1 = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1

function flattenOnce(array: any[]): any[] {
    if(array.length === 0) {
        return []
    }

    const [first, ...rest] = array
    return Array.isArray(first) ? [...first, ...flattenOnce(rest)] : [first, ...flattenOnce(rest)]
}


console.log(flattenOnce([1, 2, [3, 4], [[[5]]]]));


function flattenDepth(array: any[], deep = 1) {

}

type test = [
  Expect<
    Equal<
    Result,
    [1, 2, 3, 4, [5]]
    >>,
  Expect<
    Equal<
    Result1,
    [1, 2, 3, 4, [[5]]]
    >
  >
];
