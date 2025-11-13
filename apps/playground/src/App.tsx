import {JSX} from 'react'
import {Heading} from "@simplix/ui";

export function App(): JSX.Element {
    return (
        <>
            <Heading size={`h1`}>
                H1
            </Heading>
            <Heading size={`h2`}>
                H2
            </Heading>
            <Heading size={`h3`}>
                H3
            </Heading>
            <Heading size={`h4`}>
                H4
            </Heading>
            <Heading size={`h5`}>
                H5
            </Heading>
            <Heading size={`h6`}>
                H6
            </Heading>
        </>
    )
}