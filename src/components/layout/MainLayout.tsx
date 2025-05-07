import { Outlet } from "react-router";

import AppSidebar from "@/components/layout/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const MainLayout = () => {
    return (
        <>
            <SidebarProvider defaultOpen>
                <AppSidebar />
                <main className='container mx-auto px-2'>
                    <SidebarTrigger />
                    <Outlet />
                </main>
            </SidebarProvider>
        </>
    );
};
export default MainLayout;
