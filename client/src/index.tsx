import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
// import { ThemeProvider } from "./app/providers/ThemeProvider";
// import { ErrorBoundary } from "app/providers/ErrorBoudary";
import { StoreProvider } from "app/providers/StoreProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
    <StrictMode>
        <StoreProvider>
            <BrowserRouter>
                {/* <StoreProvider>
                <ErrorBoundary>
                    <ThemeProvider> */}
                <App />
                {/* </ThemeProvider>
                </ErrorBoundary>
            </StoreProvider> */}
            </BrowserRouter>
        </StoreProvider>
    </StrictMode>
);