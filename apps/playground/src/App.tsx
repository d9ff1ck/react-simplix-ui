import { Dropdown, Grid } from "@simplix/ui";
import type { JSX } from "react";

export function App(): JSX.Element {
    return (
        <div className={`app-container`}>
            <Grid>
                <Grid.Item></Grid.Item>
            </Grid>
            <Dropdown>
                <Dropdown.Trigger></Dropdown.Trigger>
                <Dropdown.Menu>
                    <Dropdown.Item></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}
