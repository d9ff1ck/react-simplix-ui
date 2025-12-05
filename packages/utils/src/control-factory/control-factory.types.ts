export type ControlFactoryOptions<T> = {
    value?: T;
    defaultValue: T;
    onChange?: (next: T) => void;
}

export type ControlFactoryModel<T> = {
    value: T,
    set: (value: T) => void,
    controlled: boolean,
}