// Import navigation
import { useNavigate } from "react-router-dom";

const ItemPreview = ({imageLink, brandName, itemName, price, description, descriptionHeader, specs, myKey, _id}) => {
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
        <h1 className="text-text">This is text</h1>
        <a key={myKey} onClick={() => handleItemNavigation()} name="item-preview"
        className="item-preview grid grid-rows-8 lg:mx-6 pt-2 lg:my-10 my-2 mx-0 lg:shadow-none shadow-md"
        >

            <div name="item-preview-img"  className="text-white row-span-4 flex items-center justify-center">
                <img className="self-start p-2" style={{ objectFit:"cover"}} src={imageLink}/>
            </div>
            <div name="item-brand" className="flex items-end justify-center mt-2"><h1 className="text-center">{brandName}</h1></div>            
            <div name="item-name" ><h5 className="flex items-end justify-center text-center font-bold">{itemName}</h5></div>
            <div className="border-t my-1 border-gray-500 mx-2 self-end"></div>
            <div name="item-price" className="grid place-content-center place-items-end mb-2"><h4 className="text-lg">{price}$</h4>
            
            </div>
            
        </a>
    </>
    )
    
}

export default ItemPreview;