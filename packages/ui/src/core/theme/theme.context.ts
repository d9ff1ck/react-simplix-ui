import type { Context } from "react";
import { createContext, useContext } from "react";

import type { ThemeContextValue } from "./theme.types";

/**
 * React context storing the active theme and its setter.
 * Provided by `<ThemeProvider>`.
 */
export const ThemeContext: Context<ThemeContextValue | null> = createContext<ThemeContextValue | null>(null);

/**
 * Hook for accessing theme values from the nearest ThemeProvider.
 *
 * Throws if used outside of a ThemeProvider to ensure predictable behavior.
 */
export function useThemeContext(): ThemeContextValue {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(`useThemeContext() must be used within <ThemeProvider>`);
    }

    return context;
}
