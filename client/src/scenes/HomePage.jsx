// Import components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ItemsShowContainer from "../components/ItemsShowContainer";
import { useEffect, useState } from "react";
import { setShopItems } from "../state";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
    // Hooks
    const [loading, setLoading] = useState(true);
    const [rerender, setRerender] = useState("");

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
        const response = await fetch(process.env.REACT_APP_SERVER_ROUTE +  "items/all",
        {
            method: "GET",
            headers: {key: process.env.REACT_APP_API_KEY}
        }
        );

        const allItems = await response.json();
        dispatch(setShopItems({items: allItems}));

        setTimeout(() => {
            setLoading(false);
          }, "500");
        
        
               
    }

    useEffect(() => {
        dispatch(setShopItems({items: []}))
        GetAllItems();
        
        console.log(category1);
        
      }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <>  
        {console.log("Category 1 is: " + category1)}
            {loading ? <div style={{ minHeight:"100vh"}} className="flex items-center justify-center mt-5 text-lg font-extrabold"></div> 
            :
            <>
            {/* <div className="flex items-center justify-center mt-5 fade-in">
                
            <img style={{maxHeight:"200px"}} src="https://cdn.macovi.de/images/banner/1688037442.webp"></img>
            </div> */}
            <ItemsShowContainer category={category1} itemCount={8}/>
            <ItemsShowContainer category={category2} itemCount={8}/> 
            </>
        }                      
        </>
    )
}

export default HomePage;