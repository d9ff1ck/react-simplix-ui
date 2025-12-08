import {useCallback, useRef, useState} from "react";
import {ControlModel, ControlModelOptions} from "./control-model.types";

export function createControlModel<T>(options: ControlModelOptions<T>): ControlModel<T> {
    const {value, defaultValue, onChange} = options;
    const isControlled = value !== undefined;

    const wasControlled = useRef<boolean>(isControlled);
    if (process.env.NODE_ENV !== "production") {
        if (wasControlled.current !== isControlled) {
            console.error(
                "[Simplix] Component switched between controlled and uncontrolled. This is unsupported and may lead to unexpected behavior."
            );
        }
        wasControlled.current = isControlled;
    }

    const [internal, setInternal] = useState<T>(() => {
        if (!isControlled && defaultValue !== undefined) {
            return defaultValue;
        }
        return value as T;
    });

    const currentValue = isControlled ? (value as T) : internal;

    const setValue = useCallback((next: T) => {
        if (!isControlled) {
            setInternal(next);
        }
        onChange?.(next);
    }, [isControlled, onChange]);

    const compareValue = useCallback((next: T) => {
        return next === (isControlled ? value : internal)
    }, [isControlled, value, internal])

    return {
        value: currentValue,
        set: setValue,
        controlled: isControlled,
        is: compareValue
    };
}