import {ComponentWithChildren} from "../../shared";

export type ThemeState = {
    theme?: string;
}

export type UseThemeStateResult = {
    theme: string;
    setTheme: (theme: string) => void;
}

export type ThemeContextValue = {
    theme: string;
    setTheme(theme: string): void;
}

export type ThemeProviderProps = ThemeState & ComponentWithChildren
