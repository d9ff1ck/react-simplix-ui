import {Context, createContext, useContext} from "react";
import {AccordionContextValue} from "./accordion.types";

export const AccordionContext: Context<AccordionContextValue | null> = createContext<AccordionContextValue | null>(null);

export function useAccordionContext(component: string): AccordionContextValue {
    const context = useContext<AccordionContextValue | null>(AccordionContext);

    if (!context) {
        throw new Error(`<Accordion.${component}> must be inside <Accordion>`);
    }
    return context;
}