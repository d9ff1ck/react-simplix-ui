import {ComponentWithChildren, ComponentWithStyles} from "../../../lib/types";

export type BlockquoteProps = {
    cite?: string | undefined;
} & ComponentWithStyles & ComponentWithChildren