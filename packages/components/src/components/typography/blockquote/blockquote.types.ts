import type {ComponentWithChildren, ComponentWithStyles} from "../../../../../shared/src";

export type BlockquoteProps = {
    cite?: string | undefined;
} & ComponentWithStyles & ComponentWithChildren