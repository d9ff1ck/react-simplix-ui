import {RefObject} from "react";

export type HeadlessController<TState, TActions> = {
    ref?: RefObject<HTMLElement | null>;
    value: TState;
    is: (target: TState) => boolean;
    actions: TActions;
}