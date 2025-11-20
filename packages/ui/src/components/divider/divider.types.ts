import {HTMLAttributes} from "react";
import {ComponentWithStyles} from "../../shared";

export type DividerProps = ComponentWithStyles & Omit<HTMLAttributes<HTMLHRElement>, keyof ComponentWithStyles>