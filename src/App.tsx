import { Suspense } from "react";

import PublicRoutes from "@/routes";

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PublicRoutes />
        </Suspense>
    );
}

export default App;
