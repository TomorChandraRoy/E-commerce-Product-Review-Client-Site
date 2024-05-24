import { Outlet } from "react-router-dom";
import NavBar from "../../components/shareComponent/NavBar";
import Footer from "../../components/shareComponent/Footer";

const MainLayOut = () => {
    return (
        <div className="font-poppins">
            <NavBar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default MainLayOut;