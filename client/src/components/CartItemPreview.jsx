import { useNavigate } from "react-router-dom";


const CartItemPreview = ({handleRemoveShoppingCart, imageLink, quantity, brandName, itemName, price, description, descriptionHeader, specs,  _id}) => {

    const navigate = useNavigate();


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
        <div className="fade-in cart-item-preview grid lg:grid-cols-6 grid-cols-3 grid-rows-2 lg:grid-rows-1 lg:my-3 my-0 cart-item-preview-shadow">
            <div className="h-20 col-span-1 grid grid-cols-3">
                <div className="flex items-center justify-center lg:mr-5 mr-0">
                <a onClick={() => handleRemoveShoppingCart(_id)}>
                    <img                     
                    style={{maxHeight:"22px"}}
                     src="./assets/icons/iconDelete.png"
                      className="flex items-center justify-center md:mx-2 mx-0 lg:col-span-1 col-span-3"
                      ></img>
                    </a>
                </div>
                    <img className="span-row-1 lg:h-20 lg:w-auto p-2 h-0 w-0 lg:visible invisible col-span-2" style={{maxHeight:"100%"}} src={imageLink}></img>
            </div>
            <div className="h-20 col-span-2 grid place-content-center place-items-center">
                <small className="lg:invisible lg:h-0 visible h-auto">Item</small>
                <a className="color-clickable cart-item-name-link hover:scale-105 ease-in-out transition-all" onClick={handleItemNavigation} target="_blank"><h1>{brandName} - {itemName}</h1></a>
            </div>
            <div className="h-20 col-span-1 grid place-content-center place-items-center">
                <small className="lg:invisible lg:h-0 visible h-auto">Quanitity</small>
            <h1>{quantity} x</h1>
            </div>
            <div className="h-20 col-span-1 grid place-content-center place-items-center">
            <small className="lg:invisible lg:h-0 visible h-auto">per Piece</small>
            <h1>{price.toFixed(2)} $</h1>
            </div>
            <div className="h-20 col-span-1 grid place-content-center place-items-center">
            <small className="lg:invisible lg:h-0 visible h-auto">Price</small>    
            <h1>{(+price * +quantity).toFixed(2)} $</h1>
            </div>
           
        </div>
    )

}

export default CartItemPreview;