import type {ReactNode} from "react";

/**
 * Props for the `Portal` component.
 */
export type PortalProps = {
    /**
     * Optional DOM element to mount the portal into.
     * Defaults to `document.body` when not provided.
     */
    container?: HTMLElement | null;

    /**
     * React content to render inside the portal.
     */
    children: ReactNode;
};