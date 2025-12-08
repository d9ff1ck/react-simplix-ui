export type ControlModelOptions<T> = {
    value?: T;
    defaultValue?: T;
    onChange?: (next: T) => void;
}

export type ControlModel<T> = {
    value: T,
    set: (value: T) => void,
    controlled: boolean,
    is: (value: T) => boolean
}