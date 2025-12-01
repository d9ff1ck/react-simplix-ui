import type { ComponentWithChildren } from "../../shared";

/**
 * Initial theme state passed to the ThemeProvider or useThemeState.
 */
export type ThemeState = {
    /**
     * The starting theme name. Defaults to `"light"` if not provided.
     */
    theme?: string;
};

/**
 * Return shape of the `useThemeState` hook.
 * Provides the active theme value and a setter for updating it.
 */
export type UseThemeStateResult = {
    /** The currently active theme name. */
    theme: string;

    /** Updates the active theme. */
    setTheme: (theme: string) => void;
};

/**
 * Value stored inside the ThemeContext.
 * Exposed through `useThemeContext()`.
 */
export type ThemeContextValue = {
    /** The currently active theme. */
    theme: string;

    /** Setter for switching themes. */
    setTheme(theme: string): void;
};

/**
 * Props for the ThemeProvider component.
 */
export type ThemeProviderProps = ThemeState & ComponentWithChildren;