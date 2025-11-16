import {ReactNode} from "react";

export type PortalProps = {
    container?: HTMLElement | null;
    children: ReactNode;
}