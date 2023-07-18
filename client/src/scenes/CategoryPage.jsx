import NavBar from "../components/NavBar";
import ItemPreview from "../components/ItemPreview";
import SectionHeader from "../components/SectionHeader";
import { useLocation, useNavigate } from "react-router-dom";
import { useState} from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";


const CategoryPage= () => {
    // Init location
    const location = useLocation();
    const navigate = useNavigate();

    // variables from shop
    const items = useSelector((state) => state.shopItems);

    // Hooks
    const [sorting, setSorting] = useState("");
    const [render, setRender] = useState(false);

    const startRedirect = () => {
        setTimeout(() => {
            navigate("/")
          }, "3000");
    }

    const handleLoading = () => {
        console.log("Resetting render!");
        setRender(false);
        setTimeout(() => {
            setRender(true);
          }, "3000");
    }

    useEffect(() => {            
        handleLoading();
        
      }, [location.state]); // eslint-disable-line react-hooks/exhaustive-deps
    

    if(location.state != null && items.length != 0)
    {
        // Filter items for this category
        let newArray = items.filter(function (el) {
            return el.category == location.state.category           
        });

        // If User-Sort, sort items
        if(sorting != "")
        {
            if(sorting == "asc"){        
            newArray.sort((a, b) => {
                return a.price - b.price;
            })        
            }

            else if (sorting == "desc"){        
            newArray.sort((a, b) => {
                return b.price - a.price;
            })
            }

            else if (sorting == "brand"){
            newArray.sort((a, b) => {
                if (a.brandName < b.brandName) {
                    return -1;
                }
                if (a.brandName > b.brandName) {
                    return 1;
                }
                return 0;
            })
            }
        }    

        

        

        return(
            <div className="category-page-container mt-10 lg:p-10 p-0 bg-white">
            <SectionHeader name={location.state.sectionHeader}/>
            <div className="grid place-content-around">
                <h1 className="text-center text-lg font-bold">Sort by:</h1>
                <div className="flex">
                    <a onClick={() => setSorting("asc")}><h1 className="px-3 text-lg">Price (asc.)</h1></a>
                    <a onClick={() => setSorting("desc")}><h1 className="px-3 text-lg">Price (desc.)</h1></a>
                    <a onClick={() => setSorting("brand")}><h1 className="px-3 text-lg">Brand</h1></a>
                </div>

            </div>
            <div key={location.state.category} className="grid xl:grid-cols-5 md:grid-cols-3 px-5 md:px-0 gap-0 ">
            
                {newArray.map(item => (
                <ItemPreview 
                imageLink={item.imageLink} 
                brandName={item.brandName} 
                itemName={item.itemName} 
                price={item.price}  
                description={item.description}
                descriptionHeader={item.descriptionHeader}
                specs={item.specs}
                _id={item._id}
            />
            ))}
                </div>
            </div>
        )

}
else 

{
    return(
        <div style={{height:"100vh"}} className="category-page-container mt-10 lg:p-10 p-0 bg-white">
            <h1 className="text-lg font-bold text-center">Something went wrong ...</h1>
            <h1 className="text-lg font-bold text-center">We are redirecting to the homepage.</h1>
            {startRedirect()}
        </div>
    )
}
}

export default CategoryPage;