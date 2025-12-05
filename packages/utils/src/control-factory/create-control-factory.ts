import {useCallback, useRef, useState} from "react";
import {ControlFactoryModel, ControlFactoryOptions} from "./control-factory.types";

export function createControlFactory<T>(options: ControlFactoryOptions<T>): ControlFactoryModel<T> {
    const {value, defaultValue, onChange} = options;
    const isControlled = value !== undefined;

    const wasControlled = useRef<boolean>(isControlled);
    if (process.env.NODE_ENV !== "production") {
        if (wasControlled.current !== isControlled) {
            console.error(
                "[Simplix] Component switched between controlled and uncontrolled. " +
                "This is unsupported and may lead to unexpected behavior."
            );
        }
        wasControlled.current = isControlled;
    }

    const [internal, setInternal] = useState<T>(defaultValue);
    const currentValue: T = isControlled ? value : internal;

    const onSet = useCallback((next: T) => {
        if (!isControlled) {
            setInternal(next);
        }
        onChange?.(next);
    }, [onChange]);

    return {
        value: currentValue,
        set: onSet,
        controlled: isControlled
    };
}