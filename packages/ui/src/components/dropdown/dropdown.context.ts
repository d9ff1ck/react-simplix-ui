import {Context, createContext, useContext} from "react";
import {DropdownContextValue} from "./dropdown.types";

export const DropdownContext: Context<DropdownContextValue | null> = createContext<DropdownContextValue | null>(null);

export function useDropdownContext(component: string): DropdownContextValue {
    const context = useContext<DropdownContextValue | null>(DropdownContext);

    if (!context) {
        throw new Error(`<Dropdown.${component}> must be inside <Dropdown>`)
    }
    return context;

}