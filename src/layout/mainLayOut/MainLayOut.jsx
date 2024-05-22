import { Outlet } from "react-router-dom";
import NavBar from "../../components/shareComponent/NavBar";

const MainLayOut = () => {
    return (
        <div className="lg:max-w-[1300px] md:max-w-[750px] lg:mx-auto md:mx-auto  font-poppins">
            <NavBar/>
            <Outlet></Outlet>
            <h2>Foother</h2>
        </div>
    );
};

export default MainLayOut;