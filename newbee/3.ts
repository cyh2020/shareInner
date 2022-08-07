// number
type _NArray<T, N extends number, R extends unknown[]> = R['length'] extends N ? R : _NArray<T, N, [T, ...R]>
type NArray<T, N extends number> = _NArray<T, N, []>
type NArrayNumber<L extends number> = NArray<number, L>

// 比较数字大小
export type GE<M extends number, N extends number> =
    NArrayNumber<M> extends [...x: NArrayNumber<N>, ...rest: infer R] ? true : false

// 减法
export type Subtract<M extends number, N extends number> =
    NArrayNumber<M> extends [...x: NArrayNumber<N>, ...rest: infer R] ? R['length'] : 0
export type Add<M extends number, N extends number> = [...NArrayNumber<M>, ...NArrayNumber<N>]['length']

export type NoSingleNumArr<HEAD extends number, REST extends number[]> = [HEAD, ...REST];


/**__________________________________________分割数组____________________________________________ */

// 从一个数组中切掉P个元素, 切一次
export type Split<arr extends number[], P extends number, PRE extends number[] = []> =
    P extends 0
    ? [PRE, arr]
    : arr extends NoSingleNumArr<infer HEAD, infer REST>
    ? Split<REST, Subtract<P, 1>, [...PRE, HEAD]>
    : [PRE, []]

export type t1 = Split<[1, 4, 8, 40], 6>
export type t2 = Split<[1, 4, 8, 40, 90], 2>
export type t3 = Split<[1, 4, 8, 40, 90, 100, 111, 300, 600, 120], 4>

export type TwoArr<A extends number[], B extends number[]> = [A, B];

// 从一个数组中切掉P个元素， 切多次
export type SplitMulti<arr extends number[], P extends number, R extends Array<Array<number>> = []> =
    GE<arr['length'], P> extends true
        ? (
            Split<arr, P> extends TwoArr<infer HEAD, infer REST>
                ? SplitMulti<REST, P, [...R, HEAD]>
                : never
        )
        : (
            arr['length'] extends 0 ? R : [...R, arr]
        )

export type test7 = SplitMulti<[1, 4, 8, 40, 90, 100, 111, 300, 600, 120], 1>
export type test8 = SplitMulti<[1, 4, 8, 40, 90, 100, 111, 300, 600, 120], 2>
export type test9 = SplitMulti<[1, 4, 8, 40, 90, 100, 111, 300, 600, 120], 3>
export type test10 = SplitMulti<[1, 4, 8, 40, 90, 100, 111, 300, 600, 120], 4>
