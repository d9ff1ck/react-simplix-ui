import type {HTMLAttributes} from "react";

import type {ComponentWithStyles} from "../../shared";

export type DividerProps = ComponentWithStyles & Omit<HTMLAttributes<HTMLHRElement>, keyof ComponentWithStyles>