import type {ComponentWithChildren, ComponentWithStyles} from "@simplix/utils";
import type {ButtonHTMLAttributes} from "react";

export type ButtonProps = & ComponentWithChildren & ComponentWithStyles & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ComponentWithChildren | keyof ComponentWithStyles>