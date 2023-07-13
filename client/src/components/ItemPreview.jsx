// Import navigation
import { useNavigate } from "react-router-dom";

const ItemPreview = ({imageLink, brandName, itemName, price, myKey}) => {
    // Setup navigate
    const navigate = useNavigate();

    // Functions
    const handleItemNavigation = () => {
        navigate("/item", {
            state: {
                imageLink,
                brandName,
                itemName,
                price
            }
        }
        )

    }

    return(
        <>
        <a key={myKey} onClick={() => handleItemNavigation()} name="item-preview" className="item-preview grid grid-rows-8 lg:mx-6 mx-20 my-10 transition-all">

            <div name="item-preview-img" style={{width:"100%"}} className="  text-white row-span-4 flex items-center justify-center">
                <img style={{width:"100%", height:"120px", objectFit:"cover"}} src={imageLink}/>
            </div>
            <div name="item-brand" className="flex items-end justify-center mt-2 ml-2"><h1 className="text-sm">{brandName}</h1></div>            
            <div name="item-name" ><h5 className="flex items-end justify-center text-lg ml-2">{itemName}</h5></div>
            <div className="border-t my-2 border-gray-500 mx-2"></div>
            <div name="item-price" className="grid place-content-center place-items-center my-2"><h4 className="text-lg">{price}$</h4>
            
            </div>
            
        </a>
    </>
    )
    
}

export default ItemPreview;