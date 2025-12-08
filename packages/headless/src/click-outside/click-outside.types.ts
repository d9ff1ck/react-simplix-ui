import type { RefObject } from "react";

export type ClickOutsideHandler = (event: MouseEvent | TouchEvent) => void;

export type ClickOutsideOptions = {
    reference: RefObject<HTMLElement | null>;
    handler: ClickOutsideHandler;
};
