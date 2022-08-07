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

export type TEST<A, B> = A extends B ? true : false;

export type SingleNumArr<n extends number> = [n];
export type NoSingleNumArr<HEAD extends number, REST extends number[]> = [HEAD, ...REST];

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

export type test6 = Merge2SortedList<[1, 4, 8, 40], []>

export type Split<arr extends number[], P extends number, PRE extends number[] = []> =
    P extends 0
    ? [PRE, arr]
    : arr extends NoSingleNumArr<infer HEAD, infer REST>
    ? Split<REST, Subtract<P, 1>, [...PRE, HEAD]>
    : [PRE, []]

export type TwoArr<A extends number[], B extends number[]> = [A, B];

export type SplitMulti<arr extends number[], P extends number, R extends Array<Array<number>> = []> =
    GE<arr['length'], P> extends true
    ? (Split<arr, P> extends TwoArr<infer HEAD, infer REST> ?
        SplitMulti<REST, P, [...R, HEAD]> : never
    )
    : (
        arr['length'] extends 0 ? R : [...R, arr]
    )

export type test8 = SplitMulti<[1, 4, 8, 40, 90, 100, 111, 300, 600, 120], 2>
export type test82 = SplitMulti<[1, 4, 8, 40, 90, 100, 111, 300, 600, 120], 1>


/**__________________________________________组装____________________________________________ */

export type Split2R<HEAD extends number[], REST extends Array<Array<number>>> = [HEAD, ...REST];
export type Split2<arr extends Array<Array<number>>, P extends number, PRE extends Array<Array<number>> = []> =
    P extends 0
        ? [PRE, arr]
        : arr extends Split2R<infer HEAD, infer REST>
            ? Split2<REST, Subtract<P, 1>, [...PRE, HEAD]>
            : [PRE]
export type test9 = Split2<test8, 2>

export type ConcatX<T extends readonly (readonly any[])[]> = [
    ...T[0], ...T[1], ...T[2], ...T[3], ...T[4],
    ...T[5], ...T[6], ...T[7], ...T[8], ...T[9],
    ...T[10], ...T[11], ...T[12], ...T[13], ...T[14],
    ...T[15], ...T[16], ...T[17], ...T[18], ...T[19]
];

export type Flatten<T extends readonly any[]> =
    ConcatX<[...{ [K in keyof T]: T[K] extends any[] ? T[K] : [T[K]] }, ...[][]]>
export type t9 = Flatten<[1, [2], [5, 7]]>

export type SumUpRR<A extends number[], B extends number[]> = [A, B]
export type SumUpR<HEAD extends Array<Array<number>>, REST extends Array<Array<number>>> = [HEAD, REST];

export type SumUp<arr extends Array<Array<number>>, PRE extends Array<Array<number>> = []> =
    Split2<arr, 2> extends SumUpR<SumUpRR<infer HEAD1, infer HEAD2>, infer Tail>
    ? SumUp<Tail, [...PRE, ...Merge2SortedList<HEAD1, HEAD2>]>
    : [...PRE, ...Flatten<arr>]


export type o2 = [100, 4, 808, 40, 90, 15, 111, 300, 600, 120]
export type tt1 = SumUp<SplitMulti<o2, 1>>
export type tt2 = SumUp<SplitMulti<tt1, 2>>
export type tt3 = SumUp<SplitMulti<tt2, 4>>
export type tt4 = SumUp<SplitMulti<tt3, 8>>

export type MergeSort<arr extends number[], level extends number = 1> =
    GE<level, arr['length']> extends true
    ? arr
    : MergeSort<SumUp<SplitMulti<arr, level>>, Add<level, level>>

export type tt5 = MergeSort<o2, 1>
