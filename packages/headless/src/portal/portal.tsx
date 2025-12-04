import type {JSX} from "react";
import {useEffect, useMemo} from "react";
import {createPortal} from "react-dom";

import type {PortalProps} from "./portal.types";

/**
 * Renders children into a DOM node outside of the React component tree.
 *
 * Used for modals, popovers, tooltips, and any layered UI that must escape
 * normal document flow while preserving React state and context.
 *
 * - Creates its own container element on mount.
 * - Appends it either to the provided `container` or `document.body`.
 * - Cleans up automatically on unmount.
 */
export function Portal(props: PortalProps): JSX.Element {
    const {children, container } = props;
    const targetContainer = useMemo(() => container ?? document.body, [container]);
    const targetElement = useMemo(() => document.createElement('div'), []);

    useEffect(() => {
        targetContainer.appendChild(targetElement);

        return () => {
            targetContainer.removeChild(targetElement);
        }

    }, [targetContainer, targetElement]);

    return createPortal(children, targetElement);
}