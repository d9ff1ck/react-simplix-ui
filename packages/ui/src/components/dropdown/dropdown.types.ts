import {ButtonHTMLAttributes, HTMLAttributes} from "react";
import {ComponentWithChildren, ComponentWithStyles} from "../../lib/types";

export type DropdownState = {
    isOpen?: boolean;
    onChangeState?(next: boolean): void;
    disabled?: boolean;
}

export type UseDropdownStateResult = {
    open: boolean;
    setOpen: (next: boolean) => void;
}

export type DropdownContextValue = {
    open: boolean;
    setOpen(next: boolean): void;
    disabled: boolean;
}

export type DropdownRootProps = DropdownState & ComponentWithChildren & ComponentWithStyles

export type DropdownTriggerProps = ButtonHTMLAttributes<HTMLButtonElement>

export type DropdownMenuProps = HTMLAttributes<HTMLDivElement>

export type DropdownItemProps =  {
    disabled?: boolean;
    onSelect?(): void;
} & HTMLAttributes<HTMLDivElement>