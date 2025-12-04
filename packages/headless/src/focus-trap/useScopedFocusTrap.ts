import {useRef} from "react";
import {FocusTrapOptions, ScopedFocusTrapResult} from "./focus-trap.types";
import {useFocusTrap} from "./useFocusTrap";

export function useScopedFocusTrap(options: FocusTrapOptions = {}): ScopedFocusTrapResult {
    const reference = useRef<HTMLElement | null>(null);

    useFocusTrap(reference.current, options);

    return {reference};
}