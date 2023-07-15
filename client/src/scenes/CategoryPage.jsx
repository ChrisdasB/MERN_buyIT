import NavBar from "../components/NavBar";
import ItemPreview from "../components/ItemPreview";
import SectionHeader from "../components/SectionHeader";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

const CategoryPage= () => {
    // Init location
    const location = useLocation();

    // variables from shop
    const items = useSelector((state) => state.shopItems);

    // Hooks
    const [sorting, setSorting] = useState("");

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
            <h1 className="text-center text-lg">Sort by:</h1>
            <div className="flex">
                <a onClick={() => setSorting("asc")}><h1 className="px-3">Price (asc.)</h1></a>
                <a onClick={() => setSorting("desc")}><h1 className="px-3">Price (desc.)</h1></a>
                <a onClick={() => setSorting("brand")}><h1 className="px-3">Brand</h1></a>
            </div>

        </div>
        <div className="grid lg:grid-cols-5 p-x gap-0 ">
        
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

export default CategoryPage;