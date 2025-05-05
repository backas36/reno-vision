import { Moon } from "lucide-react";
import { Link } from "react-router";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Navbar = () => {
    return (
        <nav className='flex items-center justify-between bg-amber-600 p-4'>
            {/* LEFT */}
            CollapsibleButton
            {/* RIGHT */}
            <div className='flex items-center gap-4'>
                <Link to={"/"}>Dashboard</Link>
                <Moon />
                <Avatar>
                    <AvatarImage src='https://github.com/shadcn.png' />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </nav>
    );
};
export default Navbar;
