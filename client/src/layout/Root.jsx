import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <p>footer</p>
        </div>
    );
};

export default Root;