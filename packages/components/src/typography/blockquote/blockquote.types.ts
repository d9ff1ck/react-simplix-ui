import type {ComponentWithChildren, ComponentWithStyles} from "@simplix/utils";

export type BlockquoteProps = {
    cite?: string | undefined;
} & ComponentWithStyles & ComponentWithChildren