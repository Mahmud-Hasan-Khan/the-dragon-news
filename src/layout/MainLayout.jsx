import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto mt-12 font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;