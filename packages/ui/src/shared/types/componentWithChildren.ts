import type { ReactNode } from "react";

/**
 * Base child prop used by components that render nested React nodes.
 * Applied across Simplix UI to keep layout and wrapper components consistent.
 */
export type ComponentWithChildren = {
    /** Optional React children rendered inside the component. */
    children?: ReactNode;
};
