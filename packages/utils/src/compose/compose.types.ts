export type Composer<T, R> = (...values: T[]) => R

export type ClassComposerValue =
    | string
    | false
    | undefined
    | null
    | Record<string, boolean | undefined | null>
