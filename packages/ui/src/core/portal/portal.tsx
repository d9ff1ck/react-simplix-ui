import {JSX, useEffect, useMemo} from "react";
import {createPortal} from "react-dom";
import {PortalProps} from "./portal.types";

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