import {HeadlessController} from "@simplix/utils";

export type OnClickHandler = (event: PointerEvent) => void;

export type OnClickState =
    | "enabled"
    | "disabled";

export type OnClickEvent =
    | "pointerdown"
    | "pointerup"
    | "pointercancel"
    | "click";

export type OnClickControllerOptions = {
    event?: OnClickEvent;
    state?: OnClickState;
    defaultState?: OnClickState;
    handler: OnClickHandler;
};

export type OnClickActions = {
    enable(): void;
    disable(): void;
};

export type OnClickController = HeadlessController<OnClickState, OnClickActions>