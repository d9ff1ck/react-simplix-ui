import type {JSX} from "react";

import {ThemeContext} from "./theme.context";
import {useThemeState} from "./theme.state";
import type {ThemeContextValue, ThemeProviderProps} from "./theme.types";

/**
 * Provides theme context to its children.
 *
 * - Initializes theme (default `"light"`).
 * - Exposes `theme` and `setTheme` through context.
 * - Syncs the theme value to the root DOM element.
 */
export function ThemeProvider(props: ThemeProviderProps): JSX.Element {
    const {theme: PropertyTheme = "light", children} = props;
    const {theme, setTheme} = useThemeState({theme: PropertyTheme});

    const value: ThemeContextValue = {
        theme,
        setTheme
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}