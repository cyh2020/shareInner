// number
type _NArray<T, N extends number, R extends unknown[]> = R['length'] extends N ? R : _NArray<T, N, [T, ...R]>
type NArray<T, N extends number> = _NArray<T, N, []>
type NArrayNumber<L extends number> = NArray<number, L>

export type t0 = _NArray<number, 6, []>
export type t1 = NArray <string, 6>
export type t2 = NArrayNumber <7>

// 比较数字大小
export type GE<M extends number, N extends number> =
    NArrayNumber<M> extends [...x: NArrayNumber<N>, ...rest: infer R] ? true : false

// 减法
export type Subtract<M extends number, N extends number> =
    NArrayNumber<M> extends [...x: NArrayNumber<N>, ...rest: infer R] ? R['length'] : 0
export type Add<M extends number, N extends number> = [...NArrayNumber<M>, ...NArrayNumber<N>]['length']

// 执行
export type test1 = GE<7, 6>
export type test2 = Subtract <7, 6>