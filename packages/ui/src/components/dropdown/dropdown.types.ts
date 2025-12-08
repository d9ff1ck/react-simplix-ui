import type {DropdownState} from "@simplix/headless";
import type {ComponentWithChildren, ComponentWithStyles} from "@simplix/utils";
import type {ButtonHTMLAttributes, HTMLAttributes} from "react";

export type DropdownRootProps = DropdownState & ComponentWithChildren & ComponentWithStyles

export type DropdownTriggerProps = ComponentWithChildren
    & ComponentWithStyles
    & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ComponentWithChildren | keyof ComponentWithStyles>

export type DropdownMenuProps = ComponentWithChildren
    & ComponentWithStyles
    & Omit<HTMLAttributes<HTMLDivElement>, keyof ComponentWithChildren | keyof ComponentWithStyles>

export type DropdownItemProps = {
        onSelect?: () => void;
        disabled?: boolean | undefined;
    }
    & ComponentWithChildren
    & ComponentWithStyles
    & Omit<HTMLAttributes<HTMLDivElement>, keyof ComponentWithChildren | keyof ComponentWithStyles>