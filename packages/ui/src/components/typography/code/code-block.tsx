import {JSX} from "react";
import {Code} from "./code";
import {CodeBlockProps} from "./types";
import "./styles.css"

export function CodeBlock(props: CodeBlockProps): JSX.Element {
    const { language, children, className, style} = props;

    return (
        <pre className={className} style={style}>
            <Code as={`code`} lang={language}>
                {children}
            </Code>
        </pre>
    )
}