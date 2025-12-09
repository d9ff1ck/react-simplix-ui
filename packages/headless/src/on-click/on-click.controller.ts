import { createControlModel } from "@simplix/utils";
import { useCallback, useEffect, useRef } from "react";

import type { OnClickController, OnClickControllerOptions, OnClickState } from "./on-click.types";

export function useOnClickController(options: OnClickControllerOptions): OnClickController {
    const { event = "pointerdown", state, defaultState = "enabled", handler } = options;
    const reference = useRef<HTMLElement | null>(null);

    const model = createControlModel<OnClickState>({
        ...(state !== undefined && { value: state }),
        defaultValue: defaultState,
    });

    useEffect(() => {
        const listener = (e: PointerEvent | MouseEvent) => {
            e.preventDefault();
            handler(e);
        };

        document.addEventListener(event, listener);

        return () => {
            document.removeEventListener(event, listener);
        };
    }, [handler]);

    const onEnable = useCallback(() => model.set("enabled"), []);
    const onDisable = useCallback(() => model.set("disabled"), []);

    return {
        ref: reference,
        value: model.value,
        is: model.is,
        actions: {
            enable: onEnable,
            disable: onDisable,
        },
    };
}
