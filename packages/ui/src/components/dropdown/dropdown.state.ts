import {useCallback} from "react";
import {DropdownState, UseDropdownStateResult} from "./dropdown.types";

export function useDropdownState(props: DropdownState): UseDropdownStateResult {
    const { isOpen = false, onChangeState, disabled = false} = props;

    const open = disabled ? false : isOpen;

    const setOpen = useCallback((next: boolean) => {
        if (disabled) {
            return;
        }

        onChangeState?.(next);
    }, [disabled, onChangeState])

    return { open, setOpen };
}