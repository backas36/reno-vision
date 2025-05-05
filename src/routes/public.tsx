import { Route, Routes } from "react-router";

import { MainLayout } from "@/components/layout";
import HomePage from "@/pages/home";

const PublicRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path='/' element={<HomePage />} />
            </Route>
        </Routes>
    );
};
export default PublicRoutes;
