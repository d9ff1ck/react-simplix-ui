import {Dropdown} from "@simplix/ui";
import {JSX, useState} from "react";
import "./App.css";

export function App(): JSX.Element {
    const [state, setState] = useState<boolean>(false);

    return (
        <>
            <Dropdown isOpen={state} onChangeState={setState}>
                <Dropdown.Trigger>
                    Click me
                </Dropdown.Trigger>
                <Dropdown.Menu>
                    <Dropdown.Item>
                        Element 1
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Element 2
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Element 3
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>

    );
}