import {useCallback} from "react";

import type {DropdownState, UseDropdownStateResult} from "./dropdown.types";

export function useDropdownState(props: DropdownState): UseDropdownStateResult {
    const {
        open: PropertyOpen = true,
        onChangeState,
        disabled = false
    } = props;

    const open = disabled ? false : PropertyOpen;

    const setOpen = useCallback((next: boolean) => {
        if (disabled) {
            return;
        }

        onChangeState?.(next);
    }, [disabled, onChangeState]);

    return {open, setOpen};
}