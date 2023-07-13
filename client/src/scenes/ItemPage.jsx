import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addShoppingCart } from "../state";

const ItemPage = () => {
    // Init Location
    const location = useLocation();
    const dispatch = useDispatch();

    // Functions
    const handleAddToCart = () => {
        console.log("Dispatching brandname: " + location.state.brandName);
        dispatch(addShoppingCart({item: location.state.brandName}
            )
            )
    }

    return(
        <>
        
        <div className="mt-10 grid lg:grid-cols-2 lg:grid-rows-3 grid-rows-2 lg:p-10 p-5 gap-5 bg-white shadow-none lg:shadow-md">
            <div style={{objectFit:"cover"}} name="item-page-image" className="col-span-1 row-span-2 flex items-center justify-center">
                <img className="shadow-md" src="./assets/images/TestImage.jpeg"></img>
            </div>   

            <div className="col-span-1 row-span-2 lg:p-5 p-0 grid grid-rows-2  shadow-none lg:shadow-md">        
                <div name="item-page-name" className="col-span-1  lg:p-5 p-0 grid">
                    <h5 className="item-brand-text">{location.state.brandName}</h5>
                    <div className="colorfull-divider"></div>
                    <h5 className="item-name-text">{location.state.itemName}</h5>
                </div>
                <div name="item-page-price" className="p-5 grid place-items-end">
                <h5 className="item-price-text">{location.state.price}</h5>
                    <h5 className="text-sm">incl. 14% VAT</h5>
                    <h5>Stock: &#62; 10</h5>
                </div>
                <div name="item-page-quantity" className=" grid px-5 lg:grid-cols-2 grid-rows-2">
                    <div className="item-page-quantity flex justify-center align-middle">
                        <div className="flex items-center">
                            <a href="#"><img  src="./assets/icons/iconMinus.png"/></a>
                            <input style={{textAlign:"center"}} placeholder="1" className="shadow-inner m-4 w-14 align-center"></input>
                            <a href="#"><img  src="./assets/icons/iconPlus.png"/></a>
                        </div>
                    </div>
                    <div className="flex items-center justify-end">
                        <a onClick={handleAddToCart} className="item-cart-button">Add to cart</a>
                    </div>
                    
                </div>
                
            </div> 

            <div name="item-page-description" className="lg:col-span-2 lg:row-span-1 lg:p-10 p-0">
            <div className="colorfull-divider"></div>
                <h5 className="description-header-text mt-2">This is a random description!</h5>     
                <h5 className="description-text mt-5">This is random description! Long as text here! This has to tell everything about the product in some sentences. Noone knows, how long this might be! This is random description! Long as text here! This has to tell everything about the product in some sentences. Noone knows, how long this might be! This is random description! Long as text here! This has to tell everything about the product in some sentences. Noone knows, how long this might be!</h5> 
                      
            </div>

        </div>
        </>
    )
}

export default ItemPage;