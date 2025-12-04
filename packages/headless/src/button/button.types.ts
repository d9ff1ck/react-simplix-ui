import type {ButtonHTMLAttributes} from "react";

import type {ComponentWithChildren, ComponentWithStyles} from "@simplix/utils";


export type ButtonProps = & ComponentWithChildren & ComponentWithStyles & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ComponentWithChildren | keyof ComponentWithStyles>