import { createRoot } from "react-dom/client";
import React, { ReactElement } from "react";

const App = () => {
    return (
        <>
            <h1>popUp页面</h1>
        </>
    )

}
const root = createRoot(document.getElementById("popup-container") as HTMLElement);
root.render(<App />);
