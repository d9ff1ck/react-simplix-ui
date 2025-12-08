import {HeadlessController} from "@simplix/utils";
import {RefObject} from "react";

export type AutoFocusOptions = {
    ref: RefObject<HTMLElement | null>
    active: boolean,
    initial: InitialFocusTarget,
    restore: boolean,
}

export type FocusKeyboardOptions = {
    ref: RefObject<HTMLElement | null>
    active: boolean
}

export type InitialFocusTarget = number | HTMLElement | "auto";

export type FocusTrapStatus = "active" | "disabled";

export type FocusTrapOptions = {
    status?: FocusTrapStatus;
    defaultStatus?: FocusTrapStatus;
    initial?: InitialFocusTarget;
    restore?: boolean;
};

export type FocusTrapActions = {
    enable(): void;
    disable(): void;
}

export type FocusTrapController = HeadlessController<FocusTrapStatus, FocusTrapActions>