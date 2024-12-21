import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <h1 className="font-bold">This is Main LayOut</h1>
            <Outlet/>
        </div>
    );
};

export default MainLayout;