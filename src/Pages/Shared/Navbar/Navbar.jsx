const Navbar = () => {
    const navOptions = <>
                            <li><a>Item 1</a></li>
                            <li>
                            <a>Parent</a>
                            {/* <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul> */}
                            </li>
                            <li><a>Item 3</a></li>
                       </>
    return (
        <>
          <div className="navbar max-w-screen-2xl mx-auto fixed z-10 bg-opacity-30 bg-base-100 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}    
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get Started</a>
                </div>
            </div>  
        </>
    );
};

export default Navbar;