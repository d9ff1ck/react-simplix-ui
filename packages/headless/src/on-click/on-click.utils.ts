import {useCallback} from "react";

export const listener = useCallback<((e: PointerEvent) => void)>(() => {}, []);