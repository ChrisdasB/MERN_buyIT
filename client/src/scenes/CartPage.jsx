import SectionHeader from "../components/SectionHeader";
import CartItemPreview from "../components/CartItemPreview";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { setShowItemRemoved } from "../state";
import { useDispatch } from "react-redux";
import { removeShoppingCart } from "../state";

const CartPage = () => {

    // Get data from store
    const currentCart = useSelector((state) =>  state.shoppingCart);
    const showItemRemoved = useSelector((state) => state.showItemRemoved);
    const [updatedCartItems, setUpdatedCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [seed, setSeed] = useState(1);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleRemoveShoppingCart(_id) {
        console.log("Removing");
        dispatch(setShowItemRemoved({value: true}));
        dispatch(removeShoppingCart({id: _id}));
        window.location.reload(false);    
             
    }
    
    if(showItemRemoved)
    {
        setTimeout(() => {
            dispatch(setShowItemRemoved({value: false}));
          }, "3000");  
    }

    const resolveCartItems = async () => {
        if(currentCart.length < 1)
        {
            return;
        }

        const response = await fetch(process.env.REACT_APP_SERVER_ROUTE + "items/cart", {
            method: "POST",
            headers: { "Content-Type": "application/json", key: process.env.REACT_APP_API_KEY},
            body: JSON.stringify({currentCart: currentCart})
        }); 

        var {updatedItems, totalPrice} = await response.json();
        console.log("Quantitys from server: " + updatedItems[0]["price"]);

        // Add quantitys
        for(var i = 0; i < updatedItems.length; i++)
        {
            for(var ii  = 0; ii < currentCart.length; ii++)
            {
                if(updatedItems[i]["_id"] == currentCart[ii]["id"])
                {
                    updatedItems[i].quantity = currentCart[ii]["quantity"];
                }
            }
        }

        setUpdatedCartItems(updatedItems);
        setTotalPrice(totalPrice.toFixed(2));
    }

    useEffect(() => {        
        resolveCartItems();
      }, []); // eslint-disable-line react-hooks/exhaustive-deps
    

    const items = [
        {
        imageLink: "./assets/images/TestImage.jpeg",
        brandName: "BRAND",
        itemName: "X400 dFH",
        price: 599.99,
        quantity: 1},
        
        {
        imageLink: "./assets/images/TestImage.jpeg",
        brandName: "Other Brand",
        itemName: "X400 dFH",
        price: 599.99,
        quantity: 2},
        {
        imageLink: "./assets/images/TestImage.jpeg",
        brandName: "HUAWEI",
        itemName: "X400 dFH",
        price: 599.99,
        quantity: 3},
        {
        imageLink: "./assets/images/TestImage.jpeg",
        brandName: "HP",
        itemName: "X400 dFH",
        price: 599.99,
        quantity: 2},
        {
        imageLink: "./assets/images/TestImage.jpeg",
        brandName: "AMD",
        itemName: "X400 dFH",
        price: 599.99,
        quantity: 1}
    ]

    return(     
        <>
             {updatedCartItems.length < 1 ? <div style={{height: "100vh"}} className="fade-in mt-10 lg:p-10 p-0 bg-white shadow-md">
                <h1 className="text-center text-lg font-bold">You currently have no items in your cart.</h1>
             </div>
            
            :
            
            
        <div className="fade-in mt-10 lg:p-10 p-0 bg-white shadow-md">  
                  
            <SectionHeader name={"Shopping cart:"}/>
            <div className="grid lg:grid-cols-6 lg:visible invisible lg:h-auto h-0 my-3 cart-table-header">
                <h5 className="col-span-1 flex items-center justify-center"></h5>
                <h5 className="col-span-2 flex items-center justify-center">Name</h5>
                <h5 className="col-span-1 flex items-center justify-center">Quantity</h5>
                <h5 className="col-span-1 flex items-center justify-center">Price (pc.)</h5>
                <h5 className="col-span-1 flex items-center justify-center">Price</h5>
            </div>
            <div key={seed}>
            {updatedCartItems.map(item => (
                <CartItemPreview imageLink={item.imageLink} quantity={item.quantity} brandName={item.brandName} itemName={item.itemName} price={item.price} description={item.description} descriptionHeader={item.descriptionHeader} specs={item.specs} id={item._id} handleRemoveShoppingCart={handleRemoveShoppingCart}/>
            ))}   
            </div>         
            <div className="colorfull-divider"></div>
            <div className="grid lg:grid-cols-6 grid-cols-3 place-items-center my-3 cart-table-header">
                <h5 className="lg:col-span-4 col-span-0 flex items-center justify-center"></h5>                
                <h5 className="col-span-1 flex items-center justify-center underline">TOTAL</h5>
                <h5 className="col-span-1 flex items-center justify-center underline">{totalPrice} $</h5>
            </div>
            <div className="grid lg:grid-cols-6 grid-cols-3 my-3 cart-table-header">                
                <h5 className="col-span-5 flex items-center justify-center"></h5>                
                <a onClick={() => navigate("/checkout")} className="ease-in-out hover:scale-110 transition-all font-medium item-cart-button lg:col-span-1 col-span-3 flex items-center justify-center mt-3 shadow-md">To Checkout</a>
            </div>
            {showItemRemoved ? 
                <div  
                    className="bg-green-300 cart-added-message fade-in" 
                    name="cart-added-message">
                    <h1 className="text-center">Item has been removed from your Cart</h1>
                </div> 
                : undefined
                }         
            
        </div>
    }
        </> 
    )
};
export default CartPage;