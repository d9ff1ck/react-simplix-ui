import {Accordion} from "@simplix/ui";
import {JSX} from "react";
import "./App.css";

export function App(): JSX.Element {
    return (
        <div className={`app-container`}>
            <Accordion>
                <Accordion.Header>
                    Header
                </Accordion.Header>
                <Accordion.Body>
                    Body
                </Accordion.Body>
            </Accordion>
        </div>
    );
}