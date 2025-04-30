import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import PublicRoutes from "@/routes/public.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <PublicRoutes />
        </BrowserRouter>
    </StrictMode>
);
