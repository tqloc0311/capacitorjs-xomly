import { createRoot } from "react-dom/client"
import App from "./app/app"
import "./index.css"
import { StrictMode } from "react"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
)
