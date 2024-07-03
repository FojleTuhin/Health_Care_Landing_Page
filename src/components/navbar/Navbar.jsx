import { MdOutlineArrowOutward } from "react-icons/md";

const Navbar = () => {


    const links = <>

        <li className="text-[16px] mr-6 text-[#020043]">Home</li>
        <li className="text-[16px] mr-6 text-[#020043]">Service</li>
        <li className="text-[16px] mr-6 text-[#020043]">Blog</li>
        <li className="text-[16px] mr-6 text-[#020043]">About us</li>

    </>
    return (
        <div className="pt-7 mb-10">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">

                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <img className="h-4 w-16 md:h-8 md:w-32" src="https://i.ibb.co/f21WdM2/logo-dark.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end  ">
                    <a className="btn bg-[#FBFBFB] rounded-xl border border-[#343268] md:py-[14px] md:px-7 flex gap-2 text-[16px] text-[#343268] font-medium">Appointment <span >  <MdOutlineArrowOutward /></span>
                    </a>
                </div>
            </div>


       
        </div>
    );
};

export default Navbar;