import type {ComponentWithChildren, ComponentWithStyles} from "../../../shared";

export type BlockquoteProps = {
    cite?: string | undefined;
} & ComponentWithStyles & ComponentWithChildren