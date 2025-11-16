import {Context, createContext, useContext} from "react";
import {ThemeContextValue} from "./theme.types";

export const ThemeContext: Context<ThemeContextValue | null> = createContext<ThemeContextValue | null>(null);

export function useThemeContext(): ThemeContextValue {
    const context = useContext<ThemeContextValue | null>(ThemeContext);

    if (!context) {
        throw new Error(`useThemeContext() must be inside <ThemeProvider>`);
    }

    return context;
}