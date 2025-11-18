import {ButtonHTMLAttributes} from "react";
import {ComponentWithChildren, ComponentWithStyles} from "../../lib/types";


export type ButtonProps = & ComponentWithChildren & ComponentWithStyles & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ComponentWithChildren | keyof ComponentWithStyles>