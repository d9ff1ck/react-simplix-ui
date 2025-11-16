import {Dropdown, Portal} from "@simplix/ui";
import {JSX, useState} from "react";
import "./App.css";

export function App(): JSX.Element {
    const [state, setState] = useState<boolean>(false);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "1rem"
            }}
        >
            <Dropdown open={state} onChangeState={setState}
                      style={{
                          maxWidth: "50%"
                      }}
            >
                <Dropdown.Trigger
                    style={{
                        borderRadius: "1rem",
                        background: "#1F1F1F",
                        color: "white",
                        padding: "1rem",
                        width: "100%"
                    }}
                >
                    Toggle Menu
                </Dropdown.Trigger>
                <Portal container={document.getElementById("root")}>
                    <Dropdown.Menu style={{
                        marginTop: "0.25rem",
                        borderRadius: "1rem",
                        background: "#1F1F1F",
                    }}>
                        <Dropdown.Item style={{

                            color: "white",
                            padding: "1rem",
                        }}>
                            First
                        </Dropdown.Item>
                        <Dropdown.Item style={{
                            color: "white",
                            padding: "1rem"
                        }}>
                            Second
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Portal>
            </Dropdown>
        </div>

    );
}