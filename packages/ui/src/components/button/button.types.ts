import {ButtonHTMLAttributes} from "react";
import {ComponentWithChildren, ComponentWithStyles} from "../../lib/types";

export type ButtonVariants = "primary" | "secondary";

export type ButtonProps = {
        variant?: ButtonVariants | undefined;
    }
    & ComponentWithChildren
    & ComponentWithStyles
    & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ComponentWithChildren | keyof ComponentWithStyles>