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
    console.log(shoppingCart.length);

    // Hooks
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const handleCategoryNavigation = (category, sectionHeader) => {
        
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
            <div name="big-nav-container" className="big-nav-container hidden lg:block shadow-md">
                <div className="grid lg:grid-cols-6 grid-cols-1 bg-white">
            <div name="nav-logo-container" className="bg-black lg:col-span-1 m-2 col-span-6 h-20 lg:h-auto">
                <Link to="/"><img style={{height:"90px", width: "100%"}} src="./assets/images/BrandLogo.png"/></Link>
            </div>
            <div name="nav-mid-container" className="lg:col-span-4 col-span-6 grid grid-row-2">
                
                <div name="nav-mid-upper-container" className="row-span-1 grid grid-cols-2 mb-3">


                    <div name="nav-mid-upper-left-container" className="row-span-1 grid px-2 pt-2 ">

                        <form>   
                            <label htmlFor="default-search" className="text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block h-8 w-full pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search ..." required/>
                                
                            </div>
                        </form>

                    </div>



                    <div name="nav-mid-upper-right-container" className="row-span-1 grid ">
                        
                    </div>




                    
                </div>
                <div name="nav-mid-lower-container" className="row-span-1 grid grid-cols-11 justify-items-center lg:grid-rows-1">
                <img style={{height: "10px"}} className="my-auto mx-auto invisible xl:visible" src="./assets/icons/iconNavDot.png"></img>
                    <a 
                        onClick={() => handleCategoryNavigation("pc", "PC's")} 
                        className="
                        text-center lg:text-right my-auto hover:transition-colors hover:duration-200 hover:scale-110 hover:text-purple-600 ease-in-out transition-all
                        ">PC
                    </a>
                    <img style={{height: "10px"}} className="my-auto mx-auto invisible xl:visible" src="./assets/icons/iconNavDot.png"></img>
                    <a
                        onClick={() => handleCategoryNavigation("laptop", "Laptops")}
                        className="
                        text-center my-auto hover:transition-colors hover:duration-200 hover:scale-110 hover:text-purple-600 ease-in-out transition-all
                        ">Laptops
                    </a>
                    <img style={{height: "10px"}} className="my-auto mx-auto invisible xl:visible" src="./assets/icons/iconNavDot.png"></img>
                    <a 
                        onClick={() => handleCategoryNavigation("monitor", "Monitors")} 
                        className="
                        text-center my-auto hover:transition-colors hover:duration-200 hover:scale-110 hover:text-purple-600 ease-in-out transition-all
                        ">Monitors
                    </a>
                    <img style={{height: "10px"}} className="my-auto mx-auto invisible xl:visible" src="./assets/icons/iconNavDot.png"></img>
                    <a 
                        onClick={() => handleCategoryNavigation("peripheral", "Peripherals")} 
                        className="
                        text-center my-auto hover:transition-colors hover:duration-200 hover:scale-110 hover:text-purple-600 ease-in-out transition-all
                        ">Peripherals
                    </a>
                    <img style={{height: "10px"}} className="my-auto mx-auto invisible xl:visible" src="./assets/icons/iconNavDot.png"></img>
                    <a
                        onClick={() => handleCategoryNavigation("software", "Software")} 
                        className="
                        text-center my-auto hover:transition-colors hover:duration-200 hover:scale-110 hover:text-purple-600 ease-in-out transition-all
                        ">Software
                    </a>
                    <img style={{height: "10px"}} className="my-auto mx-auto invisible xl:visible" src="./assets/icons/iconNavDot.png"></img>
                </div>
                
                
            </div>

            <div name="nav-right-container" className="lg:col-span-1 col-span-6 h-10 grid grid-cols-2 lg:h-auto justify-self-start">
                <div className="grid grid-cols-2 place-content-end mb-2 place-items-center ">                    
                <Link to="/cart"><a href="#">
                    <img className="hover:bg-purple-200" style={{height: "40px"}}  src="./assets/icons/iconCart.png"></img>
                    </a></Link>
                    {shoppingCart.length > 0 ?
                        <h1 className="text-red-500 shopping-cart-number self-center justify-self-start">{shoppingCart.length}</h1>
                        : undefined
                    }
                
                </div>               

            </div>
            </div>
            </div>
            <div name="small-nav-container" className="lg:hidden block shadow-lg bg-gray-100">

                <div className="h-15 grid grid-cols-8">



                    <a className="col-span-3 flex justify-center items-center" onClick={() => setMenuIsOpen(!menuIsOpen)} style={{ textDecoration: "none" }}>
                        {menuIsOpen ? 
                        <img style={{height: "40px", width: "50px"}} src="./assets/icons/iconMenuOpen.png"></img>  
                        :
                        <img style={{height: "30px"}} src="./assets/icons/iconMenuClosed.png"></img>
                    }
                        
                    </a>



                        
                    <div name="nav-logo-container" className="flex items-center justify-center col-span-2 h-10">
                    <Link to="/"><img style={{height:"40px", width: "auto"}} src="./assets/images/BrandLogo.png"/></Link>
                    </div>
                    <div className="col-span-3 text-center">
                    <div className="flex justify-center items-center">
                <a style={{ textDecoration: "none"}}>
                <Link to="/cart"><img style={{height: "40px"}} src="./assets/icons/iconCart.png"></img></Link>                
                </a>                
                </div>
                    </div>
                </div>
                {menuIsOpen ?
                    <div name="hidden-small-nav" className="grid grid-rows-9 justify-center">
                        <form className="mt-2">   
                            <label htmlFor="default-search" className="text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block h-8 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search ..." required/>
                                
                            </div>
                        </form>
                        <div className="border-t my-2 border-gray-500"></div>
                        <a onClick={() => handleCategoryNavigation("pc", "PC's")} className="text-left text-lg my-auto">PC's</a>
                        <a onClick={() => handleCategoryNavigation("laptop", "Laptops")} className="text-left text-lg my-auto">Laptops</a>
                        <a onClick={() => handleCategoryNavigation("monitor", "Monitors")} className="text-left text-lg my-auto">Monitors</a>
                        <a onClick={() => handleCategoryNavigation("peripheral", "Peripherals")} className="text-left text-lg my-auto">Peripherals</a>
                        <a onClick={() => handleCategoryNavigation("software", "Software")} className="text-left text-lg my-auto">Software</a>
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