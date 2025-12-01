import type {ButtonHTMLAttributes, HTMLAttributes} from "react";

import type {ComponentWithChildren, ComponentWithStyles} from "../../../../shared/src";

export type DropdownContextValue = {
    open: boolean;
    onChangeState: (open: boolean) => void;
    disabled: boolean;
}

export type DropdownState = {
    open?: boolean | undefined;
    onChangeState?: (open: boolean) => void;
    disabled?: boolean | undefined;
}

export type UseDropdownStateResult = {
    open: boolean;
    setOpen: (open: boolean) => void;
}

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