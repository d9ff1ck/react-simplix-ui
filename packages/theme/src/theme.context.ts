import type { Context } from "react";
import { createContext, useContext } from "react";

import type { ThemeContextValue } from "./theme.types";

export const ThemeContext: Context<ThemeContextValue | null> = createContext<ThemeContextValue | null>(null);

export function useThemeContext(): ThemeContextValue {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(`useThemeContext() must be used within <ThemeProvider>`);
    }

    return context;
}
