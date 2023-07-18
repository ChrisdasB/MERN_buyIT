// Import components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ItemsShowContainer from "../components/ItemsShowContainer";
import { useEffect, useState } from "react";
import { setShopItems } from "../state";
import { useDispatch, useSelector } from "react-redux";
import {Responsive} from "../components/ResponsiveSlider";
import ErrorComponent from "../components/Error";

const HomePage = () => {
    // Variable
    const carouselItemCount = 6;

    // Hooks
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    // Get random Categorys  
    var categorys = ["pc", "laptop", "monitor", "peripheral"];
    var category1 = "";
    var category2 = "";
    var header1 = "";
    var header2 = "";
    // GET CAT
    const recentlyViewed = useSelector((state) => state.recentlyViewed);
    if(recentlyViewed.length < 1)
        {
            category1 = categorys.splice((Math.random() * categorys.length) | 0, 1).toString();
            category2 = categorys.splice((Math.random() * categorys.length) | 0, 1).toString();
        }
    else 
        {
            category1 = recentlyViewed[(Math.random() * recentlyViewed.length)].toString();
            category2 = categorys.splice((Math.random() * categorys.length) | 0, 1).toString();
        }
    

    // Init dispatch
    const dispatch = useDispatch();    

    const GetAllItems = async () => {
        try {

        
        const response = await fetch(process.env.REACT_APP_SERVER_ROUTE +  "items/all",
        {
            method: "GET",
            headers: {key: process.env.REACT_APP_API_KEY}
        }
        );

        const allItems = await response.json();
        const {message} = allItems;
        if(message)
        {
            setError(true);
        }
        dispatch(setShopItems({items: allItems}));

        setTimeout(() => {
            setLoading(false);
          }, "500");
        
        
        }
        catch(err) {
            setError(true);
            console.log("An error occured. Error: " + err.message);
        }
    }

    useEffect(() => {
        dispatch(setShopItems({items: []}))
        GetAllItems();
        
      }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <>
        {error ? <ErrorComponent/>
        :    
    
        <div className="category-page-container mt-10 lg:p-10 p-0 bg-white">          
            {loading ? <div style={{ minHeight:"100vh"}} className="flex items-center justify-center mt-5 text-lg font-extrabold"></div> 
            :
            <>
            <Responsive/>
            {/* <div className="flex items-center justify-center mt-5 fade-in">
                
            <img style={{maxHeight:"200px"}} src="https://cdn.macovi.de/images/banner/1688037442.webp"></img>
            </div> */}
            <ItemsShowContainer category={category1} itemCount={carouselItemCount}/>
            <ItemsShowContainer category={category2} itemCount={carouselItemCount}/> 
            </>
        }                      
        </div>
        }
        </>
    )
}

export default HomePage;