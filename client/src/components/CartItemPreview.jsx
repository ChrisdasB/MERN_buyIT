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
        <div className="fade-in cart-item-preview grid lg:grid-cols-7 grid-cols-3 grid-rows-2 lg:grid-rows-1 lg:my-3 my-0 cart-item-preview-shadow">
            
            <div className="flex justify-center items-center col-span-1  lg:mr-5 mr-0">
            <a onClick={() => handleRemoveShoppingCart(_id)}>
                <img                     
                style={{maxHeight:"30px"}}
                src="./assets/icons/iconMenuOpen.png"
                className="hover:scale-110 flex items-center justify-center mx-0 col-span-1"
                ></img>
            </a>
            </div>
            <div className="col-span-2 lg:col-span-1 grid-rows-2 flex items-center justify-center">
                    <img className="lg:h-20 h-12 lg:w-auto p-2" style={{maxHeight:"100%"}} src={imageLink}></img>
                    </div>
            <div className="lg:h-20 h-10 lg:col-span-2 col-span-3 grid ls:place-content-center ls:place-items-center">
                <small className="invisible h-0">Item</small>
                <a className="color-clickable cart-item-name-link hover:scale-105 ease-in-out transition-all text-center text-sm" onClick={handleItemNavigation} target="_blank"><h1>{brandName} - {itemName}</h1></a>
            </div>
            <div className="lg:h-20 h-10 col-span-1 grid place-content-center place-items-center text-xs md:text-base font-bold">
                <small className="lg:invisible lg:h-0 visible h-auto">Quanitity</small>
                <h1>{quantity} x</h1>
            </div>
                <div className="lg:h-20 h-10 col-span-1 grid place-content-center place-items-center text-xs font-bold md:text-base">
                <small className="lg:invisible lg:h-0 visible h-auto">per Piece</small>
            <h1>{price.toFixed(2)} $</h1>
            </div>
            <div className="lg:h-20 h-10 col-span-1 grid place-content-center place-items-center text-xs font-bold md:text-base">
            <small className="lg:invisible lg:h-0 visible h-auto">Price</small>    
            <h1>{(+price * +quantity).toFixed(2)} $</h1>
            </div>
           
        </div>
    )

}

export default CartItemPreview;