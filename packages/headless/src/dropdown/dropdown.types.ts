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

export type DropdownStateResult = {
    open: boolean;
    setOpen: (open: boolean) => void;
}