/**
 * A keyboard key string as reported by `event.key`.
 */
export type Key = string;

/**
 * Callback fired when a subscribed key is pressed.
 */
export type KeyDownHandler = (event: KeyboardEvent) => void;

/**
 * Configuration object for the `useKeyDown` hook.
 */
export type KeyDownOptions = {
    /**
     * One or more keys to listen for.
     */
    keys: Key | Key[];

    /**
     * Called whenever any of the subscribed keys is pressed.
     */
    handler: KeyDownHandler;
};