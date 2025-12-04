import type {Composer} from "./compose.types";

export function createComposer<T, R>(handler: (...values: T[]) => R): Composer<T, R> {
    return (...values: T[]) => handler(...values);
}