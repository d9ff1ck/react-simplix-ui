
export type Key = string;

export type KeyDownHandler = (event: KeyboardEvent) => void;

export type KeyDownOptions = {
    keys: Key | Key[];
    handler: KeyDownHandler;
};