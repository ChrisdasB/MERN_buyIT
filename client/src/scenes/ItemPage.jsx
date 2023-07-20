import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addShoppingCart } from "../state";
import { useEffect, useState } from "react";

const ItemPage = () => {
    // Hooks
    const[showCartAddedMessage, setShowCardAddedMessage] = useState(false);
    const[quantity, setQuantity] = useState(1);

    // Init Location
    const location = useLocation();
    const dispatch = useDispatch();

    const navigate = useNavigate();

    // Functions

    // Add item to cart, show message, hide message after 3 seconds
    const handleAddToCart = () => {
        if(location.state._id == null || location.state._id.length < 1)
        {
            return;
        }
        dispatch(addShoppingCart({item: {
            id: location.state._id,
            quantity: quantity
        }        
        }));
        setShowCardAddedMessage(true);
        setTimeout(() => {
            setShowCardAddedMessage(false);
          }, "3000");
    }

    // Increase Quantity
    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const handleDecreaseQuantity = () => {
        if(quantity == 1)
        {
            return;
        }
        setQuantity(quantity - 1);
    }

    const startRedirect = () => {
        setTimeout(() => {
            navigate("/")
          }, "3000");
    }

    // Scroll to top of page
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    if(location.state != null)
    {

    

    return(
        <>
        
        <div className="mt-10 grid lg:grid-cols-2 lg:grid-rows-3 grid-rows-2 lg:p-10 p-5 gap-5 bg-white shadow-none">
            <div style={{objectFit:"cover"}} name="item-page-image" className="col-span-1 row-span-2 flex items-center justify-center">
                <img className="shadow-md lg:shadow-none p-5" src={location.state.imageLink}></img>
            </div>   

            <div className="col-span-1 row-span-2 lg:p-5 p-0 grid grid-rows-2  shadow-none lg:shadow-md">        
                <div name="item-page-name" className="col-span-1  lg:p-5 p-0 grid">
                    <h5 className="item-brand-text">{location.state.brandName}</h5>
                    <div className="colorfull-divider"></div>
                    <h5 className="item-name-text">{location.state.itemName}</h5>
                </div>
                <div name="item-page-price" className="p-5 grid place-items-end">
                <h5 className="item-price-text"><small className="text-2xl">$</small> {location.state.price}.-</h5>
                    <h5 className="text-sm">incl. 14% VAT</h5>
                </div>
                <div name="item-page-quantity" className=" grid px-5 lg:grid-cols-2 grid-rows-2">
                    <div className="item-page-quantity flex justify-center align-middle">
                        <div className="flex items-center">
                            <a onClick={handleDecreaseQuantity}><img  src="./assets/icons/iconMinus.png"/></a>
                            <input style={{textAlign:"center"}} value={quantity} className="shadow-inner m-4 w-14 align-center"></input>
                            <a onClick={handleIncreaseQuantity}><img  src="./assets/icons/iconPlus.png"/></a>
                        </div>
                    </div>
                    <div className="flex items-center justify-end">
                        <a onClick={handleAddToCart} className="mb-5 ease-in-out hover:scale-110 transition-all mx-auto font-medium item-cart-button lg:col-span-1 col-span-3 flex items-center justify-center mt-3 shadow-md">Add to cart</a>
                    </div>
                    
                </div>
                
            </div> 

            <div name="item-page-description" className="lg:col-span-2 lg:row-span-1 lg:p-10 p-0">
            <div className="colorfull-divider"></div>
                <h5 className="description-header-text mt-2">{location.state.descriptionHeader}</h5>     
                <h5 className="description-text mt-5">{location.state.description}</h5>                       
            </div>
            <div name="item-page-specs" className="lg:col-span-2 lg:row-span-1 lg:p-10 p-0">
            <div className="colorfull-divider"></div>
            <h5 className="description-header-text mt-2 mb-5 underline">Specifications:</h5>
                {Object.keys(location.state.specs).map( (keyName, i) => (
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:mb-4 mb-1 border-b-2">
                        <h5 className="font-bold">{keyName}:</h5>
                        <h5>{location.state.specs[keyName]}</h5>
                    </div>
                ))}        
                {showCartAddedMessage ? 
                <div  
                    className="cart-added-message fade-in py-4" 
                    name="cart-added-message">
                    <h1 className="text-center">"{location.state.itemName}" has been added to your Cart</h1>
                </div> 
                : undefined
                }             
            </div>
            

        </div>
        
        </>
    )
}
else {
    return(
        <div className="category-page-container mt-10 lg:p-10 p-0 bg-white">
            <h1 className="text-lg font-bold">Something went wrong ...</h1>
            <h1>We are redirecting to the homepage.</h1>
            {startRedirect()}
        </div>
    )
}
}


export default ItemPage;