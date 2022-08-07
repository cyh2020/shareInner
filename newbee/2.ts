// number
type _NArray<T, N extends number, R extends unknown[]> = R['length'] extends N ? R : _NArray<T, N, [T, ...R]>
type NArray<T, N extends number> = _NArray<T, N, []>
type NArrayNumber<L extends number> = NArray<number, L>

// 比较数字大小
export type GE<M extends number, N extends number> =
    NArrayNumber<M> extends [...x: NArrayNumber<N>, ...rest: infer R] ? true : false

export type NoSingleNumArr<HEAD extends number, REST extends number[]> = [HEAD, ...REST];

/**__________________________________________合并两个数组____________________________________________ */
// smaller first
export type Merge2SortedList<A extends number[], B extends number[], R extends number[] = []> =
    A extends [] ? (
        [...R, ...B]
    ) : (
        B extends []
        ? [...R, ...A]
        : (
            A extends NoSingleNumArr<infer a0, infer ra>
            ? (B extends NoSingleNumArr<infer b0, infer rb>
                ? (
                    GE<a0, b0> extends true
                    ? Merge2SortedList<A, rb, [...R, b0]>
                    : Merge2SortedList<ra, B, [...R, a0]>
                )
                : R)
            : R
        )
    )

export type test6 = Merge2SortedList<[1, 4, 8, 40], [2, 4, 6, 8]>
export type test7 = Merge2SortedList<[1], [2]>
export type test8 = Merge2SortedList<[1], []>