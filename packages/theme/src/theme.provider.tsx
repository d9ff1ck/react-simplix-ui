import type { JSX } from "react";

import { ThemeContext } from "./theme.context";
import { useThemeState } from "./theme.state";
import type { ThemeContextValue, ThemeProviderProps } from "./theme.types";

export function ThemeProvider(props: ThemeProviderProps): JSX.Element {
    const { theme: PropertyTheme = "light", children } = props;
    const { theme, setTheme } = useThemeState({ theme: PropertyTheme });

    const value: ThemeContextValue = {
        theme,
        setTheme,
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
