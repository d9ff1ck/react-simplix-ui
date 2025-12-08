import {createControlModel} from "@simplix/utils";
import {useCallback, useRef} from "react";
import {useAutoFocusController} from "./auto-focus.controller";
import {FocusTrapController, FocusTrapOptions, FocusTrapStatus} from "./focus-trap.types";
import {useFocusKeyboardController} from "./focus-keyboard.controller";

export function useFocusTrapController(options: FocusTrapOptions = {}): FocusTrapController {
    const reference = useRef<HTMLElement | null>(null);
    const {status, defaultStatus = "active", initial = "auto", restore = true} = options;

    const model = createControlModel<FocusTrapStatus>({
        ...(status !== undefined && {value: status}),
        defaultValue: defaultStatus
    });

    const isActive = model.is("active");

    useAutoFocusController({
        ref: reference,
        active: isActive,
        initial: initial,
        restore: restore
    })

    useFocusKeyboardController({
        ref: reference,
        active: isActive,
    })

    const onEnable = useCallback(() => {
        model.set("active");
    }, [model]);

    const onDisable = useCallback(() => {
        model.set("disabled");
    }, [model]);

    return {
        ref: reference,
        value: model.value,
        is: model.is,
        actions: {
            enable: onEnable,
            disable: onDisable
        }
    }
}