import { Outlet } from "react-router";

import AppSidebar from "@/components/layout/AppSidebar";
import Navbar from "@/components/layout/Navbar";

const MainLayout = () => {
    return (
        <>
            <AppSidebar />
            <main className='w-full outline'>
                <Navbar />
                <div className='bg-amber-200 px-4'>
                    <Outlet />
                </div>
            </main>
        </>
    );
};
export default MainLayout;
