import {ThemeProvider} from "@simplix/ui";
import {createRoot} from "react-dom/client";
import {App} from "./App";

createRoot(document.getElementById("root")!).render(
    <>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </>
);