import {Button, Text} from "@simplix/ui";
import {JSX} from "react";
import "./App.css";

export function App(): JSX.Element {
    return (
        <div className={`app-container`}>
            <Button>
                <Text>
                    Click Me!
                </Text>
            </Button>
        </div>
    );
}