// Import navigation
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ItemPreview = ({imageLink, brandName, itemName, price, description, descriptionHeader, specs,  _id}) => {
    // Setup navigate
    const navigate = useNavigate();


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

    

    return(
        <>
        <a onClick={() => handleItemNavigation()} 
        name="item-preview"
        className="item-preview grid grid-rows-8 pt-2 lg:my-10 my-2 mx-1 md:shadow-none shadow-md"
        >

            <div name="item-preview-img"  className="text-white row-span-4 flex items-center justify-center">                
                <img className="self-start p-2" style={{ objectFit:"cover"}} loading="lazy" src={imageLink}/>
            </div>
            <div name="item-brand" className="flex items-end justify-center mt-2"><h5 className="text-center">{brandName}</h5></div>            
            <div name="item-name" style={{height:"20px", overflow: "hidden" }} className="flex items-center justify-center">
                <h5 style={{whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"}} className="preview-item-name px-2 text-center font-bold">{itemName}</h5>
            </div>
            <div className="border-t my-1 border-purple-600 self-end mx-2"></div>
            <div name="item-price" className="grid place-content-center place-items-end mb-2"><h4 className="text-lg">{price}$</h4>
            
            </div>
            
        </a>
    </>
    )
    
}

export default ItemPreview;