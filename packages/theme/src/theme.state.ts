import {useEffect, useState} from "react";

import type {ThemeState, UseThemeStateResult} from "./theme.types";

/**
 * Internal hook used by ThemeProvider to manage the active theme.
 *
 * - Initializes theme from props.
 * - Syncs the theme to `document.documentElement.dataset.theme`.
 * - Provides a stable theme state and setter.
 */
export function useThemeState(props: ThemeState): UseThemeStateResult {
    const {theme: PropertyTheme = "light"} = props;
    const [theme, setTheme] = useState<string>(PropertyTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    return {
        theme,
        setTheme
    };
}