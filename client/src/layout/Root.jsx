import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <p>nav</p>
            <Outlet/>
            <p>footer</p>
        </div>
    );
};

export default Root;