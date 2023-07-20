// Import navigation
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ItemPreview = ({imageLink, brandName, itemName, price, description, descriptionHeader, specs,  _id}) => {
    // Setup navigate
    const navigate = useNavigate();

    // Image Hook
    const[imgLoaded, setImageLoaded] = useState(false);


    // Functions
    const handleItemNavigation = () => {
        navigate("/item", {
            state: {
                imageLink,
                brandName,
                itemName,
                price,
                description,
                descriptionHeader,
                specs,
                _id
            }
        }
        )
    }

    const handleImageLoaded = () => {
        setImageLoaded(true);
    }
    

    return(
        <>
        <a onClick={() => handleItemNavigation()} 
        name="item-preview"
        className="item-preview grid grid-rows-8 pt-2 lg:my-10 my-2 mx-1 md:shadow-none shadow-md"
        >
            
            <div name="item-preview-img" className={imgLoaded ? "text-white row-span-4 flex items-center justify-center" : "text-white bg-gray-200 animate-pulse row-span-4 flex items-center justify-center"}>   
                           
                <img className={imgLoaded ? "self-start p-2 image-active" : "self-start p-2 image-inactive"} onLoad={handleImageLoaded} loading="lazy" src={imageLink}/>
            </div>
            <div name="item-name" style={{height:"20px", overflow: "hidden" }} className="flex items-center justify-start">
                <h5 style={{whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"}} className="preview-item-name px-4 font-bold">{itemName}</h5>
            </div>          
            <div name="item-name" style={{height:"20px", overflow: "hidden" }} className="flex items-center justify-start">
                <h5 style={{whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"}} className="preview-item-name px-4">{brandName}</h5>
            </div>
            <div className="border-t my-1 border-purple-600 self-end mx-4"></div>
            <div name="item-price" className="grid place-content-start place-items-end mb-2"><h4 className="text-lg px-4"><small>$</small> {price}.-</h4>
            
            </div>
            
        </a>
    </>
    )
    
}

export default ItemPreview;