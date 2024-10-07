import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <p className="bg-gray-700 my-10">footer</p>
        </div>
    );
};

export default Root;