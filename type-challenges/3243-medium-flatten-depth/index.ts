import { Equal, Expect } from "@type-challenges/utils";

// 1. { [key: string]: never } 为空对象

type FlattenOnce<T extends any[], R extends any[] = []> = T extends [infer F, ...infer P]
?
[F] extends any[] ? FlattenOnce<P, [...R, F]>
  : FlattenOnce<P, [...R, F]> :
R;

type FlattenDepth<T extends any[]> = T extends [infer F, ...infer P] ? P : never;

type R1 = FlattenOnce<[1, 2, [3, 4], [[[5]]]]>
type Result = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
type Result1 = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1

function flattenOnce(array: any[], result: any[] = []): any[] {
    if(array.length === 0) {
        return result
    }

    const [first, ...rest] = array
    return flattenOnce(rest, [...result, first])
}


console.log(flattenOnce([1, 2, [3, 4], [[[5]]]]));


function flattenDepth(array: any[], deep = 1) {

}

type test = [
  Expect<
    Equal<
    Result,
    [2, 1]
    >>,
  Expect<
    Equal<
    Result1,
    ['pear', 'blueberry']
    >
  >
];
