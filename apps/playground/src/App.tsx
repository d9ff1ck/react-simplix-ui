import {JSX} from "react";
import {Button} from "react-simplix-ui";
import {useFocusTrap} from "react-simplix-ui/src";

export function App(): JSX.Element {
    useFocusTrap(null)

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