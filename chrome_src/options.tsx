import { createRoot } from "react-dom/client";
import React, { ReactElement } from "react";

const App = () => {
    return (
        <>
            <h1>options页面</h1>
        </>
    )

}
const root = createRoot(document.getElementById("options-container") as HTMLElement);
root.render(<App />);
