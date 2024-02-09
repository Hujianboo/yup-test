import { createRoot } from "react-dom/client";
import React, { ReactElement } from "react";
import { App } from "@/App";



const root = createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
