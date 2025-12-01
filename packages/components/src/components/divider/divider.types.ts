import type {HTMLAttributes} from "react";

import type {ComponentWithStyles} from "../../../../shared/src";

export type DividerProps = ComponentWithStyles & Omit<HTMLAttributes<HTMLHRElement>, keyof ComponentWithStyles>