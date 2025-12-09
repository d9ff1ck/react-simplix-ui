import { Dropdown, Flex } from "@simplix/ui";
import type { JSX } from "react";

export function App(): JSX.Element {
    return (
        <div className={`app-container`}>
            <Flex as={"div"}>
                <Dropdown>
                    <Dropdown.Trigger>Open</Dropdown.Trigger>
                    <Dropdown.Menu>
                        <Dropdown.Item disabled></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Flex>
        </div>
    );
}
