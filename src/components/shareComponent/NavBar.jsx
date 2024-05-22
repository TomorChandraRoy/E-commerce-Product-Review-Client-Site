import { useState } from "react";
import "./Style.css";
import { TfiAlignRight } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";
import { MdShoppingCartCheckout } from "react-icons/md";


const NavBar = () => {
    const [open, setOpen] = useState(false);
    console.log(open);
    return (
        <>
            <header className="bg-orange-200 mt-5">
                <nav className="flex justify-between items-center w-[98%] mx-auto ">
                    <div className="text-3xl font-bold font-serif">
                        GREENMIND 
                    </div>
                    <div className={`md:static md:min-h-fit  md:w-auto   absolute min-h-[60vh]  left-0  w-full flex items-center pt-10 md:pt-0 pl-1 duration-500   ${open ? 'top-14  bg-amber-300 ' : 'top-[-100%] '}`}>
                        <ul className="  flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 font-bold">
                            <li>
                                <NavLink to="/" className={({ isActive, isPending }) => isActive ? "active text-orange-400" : isPending ? "pending": "" }> Home </NavLink>
                            </li>
                            <li>
                                <NavLink to="/products" className={({ isActive, isPending }) => isActive ? "active text-orange-400" : isPending ? "pending": "" }> Products </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive, isPending }) => isActive ? "active text-orange-400" : isPending ? "pending": "" }> Contacts </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-1">
                        <button className=" text-black text-3xl  mr-3 rounded-full hover:bg-[#87acec]"><MdShoppingCartCheckout />
                        </button>
                        <button className=" text-black text-3xl mr-3 rounded-full hover:bg-[#87acec]"><HiUserCircle />
                        </button>
                        <button className="bg-[#577dc0] text-white lg:px-2 lg:py-2   rounded-xl hover:bg-[#87acec]">Sign in
                        </button>
                        <div onClick={() => setOpen(!open)} className="text-3xl  cursor-pointer md:hidden lg:hidden mt-2">
                            <TfiAlignRight className="text-[30px] ml-5" name={open ? 'close' : 'menu'} ></TfiAlignRight>
                        </div>

                    </div>
                </nav>
            </header>
        </>
    );
};

export default NavBar;