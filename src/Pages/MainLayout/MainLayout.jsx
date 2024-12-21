import { Outlet } from "react-router-dom";
import Navbar from "../../components/NavBar/NavBar";

const MainLayout = () => {
    return (
        <div className="font-sans">
            <Navbar/>
            <h1 className="font-bold">This is Main LayOut</h1>
            <Outlet/>
        </div>
    );
};

export default MainLayout;