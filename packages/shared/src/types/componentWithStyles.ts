import type { CSSProperties } from "react";

/**
 * Common style-related props shared across Simplix UI components.
 *
 * Provides optional `className` and `style` overrides,
 * allowing full control over styling, theming, and customization.
 */
export type ComponentWithStyles = {
    /** Optional CSS class name applied to the component root. */
    className?: string;

    /** Inline style overrides applied directly to the component's root element. */
    style?: CSSProperties;
};