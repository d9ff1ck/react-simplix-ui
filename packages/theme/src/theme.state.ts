import { useEffect, useState } from "react";

import type { ThemeState, UseThemeStateResult } from "./theme.types";

export function useThemeState(props: ThemeState): UseThemeStateResult {
    const { theme: PropertyTheme = "light" } = props;
    const [theme, setTheme] = useState<string>(PropertyTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    return {
        theme,
        setTheme,
    };
}
