import { useState } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

// Import Link
import { Link } from "react-router-dom";

// Import navigation
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    // Navigation
    const navigate = useNavigate();
    const shoppingCart = useSelector((state) => state.shoppingCart);

    // Hooks
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const handleCategoryNavigation = (category, sectionHeader) => {
        setMenuIsOpen(!menuIsOpen);
        navigate("/category", {
            state: {
                category: category,
                sectionHeader: sectionHeader
            }
        });
    }


    return(
        <>        
        <div className="card-header"></div>
        {/* Big Navigation Container */}
            <div name="big-nav-container" className="big-nav-container hidden lg:block shadow-md">
                <div className="grid lg:grid-cols-6 grid-cols-1 bg-white">
            {/* LOGO */}
            <div name="nav-logo-container" className="lg:col-span-1 col-span-6  lg:h-auto py-2 flex items-end justify-end">
                <Link to="/"><img className="" style={{height:"70px", width: "auto", overflow:"hidden"}} src="./assets/images/BrandSingleLogoSlim.png"/></Link>
            </div>
            
            <div name="nav-mid-container" className="lg:col-span-4 col-span-6 grid grid-row-2">    
                {/* Middle, upper container */}            
               

                {/* Middle, lower container - Category Navigation */}
                <div name="nav-mid-lower-container" className="row-span-1 grid grid-cols-11 justify-items-center lg:grid-rows-1">
                <img style={{height: "10px"}} className="my-auto mx-auto invisible xl:visible" src="./assets/icons/iconNavDot.png"></img>
                    <a 
                        onClick={() => handleCategoryNavigation("pc", "PC's")} 
                        className="
                        text-center lg:text-right my-auto hover:transition-colors hover:duration-200 hover:scale-110 ease-in-out transition-all
                        ">PC
                    </a>
                    <img style={{height: "10px"}} className="my-auto mx-auto invisible xl:visible" src="./assets/icons/iconNavDot.png"></img>
                    <a
                        onClick={() => handleCategoryNavigation("laptop", "Laptops")}
                        className="
                        text-center my-auto hover:transition-colors hover:duration-200 hover:scale-110 ease-in-out transition-all
                        ">Laptops
                    </a>
                    <img style={{height: "10px"}} className="my-auto mx-auto invisible xl:visible" src="./assets/icons/iconNavDot.png"></img>
                    <a 
                        onClick={() => handleCategoryNavigation("monitor", "Monitors")} 
                        className="
                        text-center my-auto hover:transition-colors hover:duration-200 hover:scale-110 ease-in-out transition-all
                        ">Monitors
                    </a>
                    <img style={{height: "10px"}} className="my-auto mx-auto invisible xl:visible" src="./assets/icons/iconNavDot.png"></img>
                    <a 
                        onClick={() => handleCategoryNavigation("peripheral", "Peripherals")} 
                        className="
                        text-center my-auto hover:transition-colors hover:duration-200 hover:scale-110 ease-in-out transition-all
                        ">Peripherals
                    </a>
                    <img style={{height: "10px"}} className="my-auto mx-auto invisible xl:visible" src="./assets/icons/iconNavDot.png"></img>
                    <a
                        onClick={() => handleCategoryNavigation("software", "Software")} 
                        className="
                        text-center my-auto hover:transition-colors hover:duration-200 hover:scale-110 ease-in-out transition-all
                        ">Software
                    </a>
                    <img style={{height: "10px"}} className="my-auto mx-auto invisible xl:visible" src="./assets/icons/iconNavDot.png"></img>
                </div>
            </div>

            <div name="nav-right-container" className="lg:col-span-1 col-span-6 h-10 grid grid-cols-2 lg:h-auto justify-self-start">
                <div className="grid grid-cols-2 place-content-center mb-2 place-items-center ">                    
                <Link to="/cart"><a href="#">
                    <img className="hover:transition-colors hover:duration-200 hover:scale-110" style={{height: "40px"}}  src="./assets/icons/iconCart.png"></img>
                    </a></Link>
                    {shoppingCart.length > 0 ?
                        <h1 className="text-red-500 shopping-cart-number self-center justify-self-start">{shoppingCart.length}</h1>
                        : undefined
                    }
                
                </div>               

            </div>
            </div>
            </div>
            <div name="small-nav-container" className="small-nav-container lg:hidden block shadow-lg bg-gray-100">

                <div className="grid grid-cols-8">

                    <a className="col-span-2 flex justify-center items-center" onClick={() => setMenuIsOpen(!menuIsOpen)} style={{ textDecoration: "none" }}>
                        {menuIsOpen ? 
                        <img style={{maxHeight: "50px", width:"auto"}} src="./assets/icons/iconMenuOpen.png"></img>  
                        :
                        <img style={{maxHeight: "40px"}} src="./assets/icons/iconMenuClosed.png"></img>
                    }
                    </a>
                    <div name="nav-logo-container" className="flex items-center justify-center mt-1 col-span-4 h-10">
                    <Link to="/"><img style={{height: "70px", width: "auto", overflow:"hidden"}} src="./assets/images/BrandSingleLogoWide.png"/></Link>
                    </div>
                    <div className="col-span-2">
                        <div className="grid grid-cols-1">
                        <Link to="/cart">
                            <a style={{ textDecoration: "none"}} className="col-span-2 mt-1 flex justify-center items-end">
                            <img style={{maxHeight: "40px"}} src="./assets/icons/iconCart.png"></img>
                            {shoppingCart.length > 0 ?
                                    <h1 className="text-red-500 shopping-cart-number-small">{shoppingCart.length}</h1>
                                    : 
                                    undefined
                            }
                            </a>     
                            </Link>           
                        </div>
                    </div>
                </div>
                {menuIsOpen ?
                    <div name="hidden-small-nav"  className="bg-gray-100 grid grid-rows-9 justify-center font-bold text-lg text-left">                       
                        <div className="border-t my-2 border-gray-500 w-72"></div>
                        <a onClick={() => handleCategoryNavigation("pc", "PC's")} className="my-auto">PC's</a>
                        <a onClick={() => handleCategoryNavigation("laptop", "Laptops")} className="my-auto">Laptops</a>
                        <a onClick={() => handleCategoryNavigation("monitor", "Monitors")} className="my-auto">Monitors</a>
                        <a onClick={() => handleCategoryNavigation("peripheral", "Peripherals")} className="my-auto">Peripherals</a>
                        <a onClick={() => handleCategoryNavigation("software", "Software")} className="my-auto">Software</a>
                        <div className="border-t my-2 border-gray-500"></div>
                        <div className="flex justify-start items-center mb-3">
                    
                </div>
                    </div>
                    : undefined }
            </div>
        </>
    )
}

export default NavBar;