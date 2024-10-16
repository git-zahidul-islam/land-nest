import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
const Navbar = lazy(() => import('../shared/Navbar'))

const Root = () => {
    return (
        <div>
            <Suspense fallback={<div className="bg-green-400 animate-bounce duration-700 transition-all w-full h-full"></div>}>
                <Navbar/>
            </Suspense>
            <Outlet/>
        </div>
    );
};

export default Root;