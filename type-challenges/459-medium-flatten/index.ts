import { Equal, Expect } from "@type-challenges/utils";

type Flatten<T extends any[], U extends any[] = []> = T extends [infer P, ...infer K]
? P extends any[] ? Flatten<[...P, ...K], U> : Flatten<K, [...U, P]>
: U

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]

function _flatten(array: any[], result: any[] = []): any[] {

    // T extends [infer P, ...infer K]
    // 判断T的length是否等于0，若等于直接return result
    if(array.length === 0) {
        return result // U
    }
    // [infer P, ...infer K]
    // P 对应first，K对应rest，T对应array
    const [first, ...rest] = array
    // P extends any[]
    if(Array.isArray(first)) {
        // Flatten<[...P, ...K], U>
        return _flatten([...first,...rest], result)
    } else {
        // Flatten<K, [...U, P]>
        return _flatten(rest, [...result, first])
    }
}
console.log( _flatten([1, 2, [3, 4], [[[5]]]]));

type test = [
  Expect<
    Equal<
    flatten,
    [1, 2, 3, 4, 5]
    >
  >
];
