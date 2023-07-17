import { useSelector } from "react-redux";
import SectionHeader from "./SectionHeader";
import { useState } from "react";

const CheckOut = ({handleCheckout}) => {

    const [disclaimerChecked, setDisclaimerChecked] = useState(false);
    const [processClicked, setProcessClicked] = useState(false);

    const handelCheckoutClicked = () => {
        console.log("Checkout clicked!")
        handleCheckout();
        setDisclaimerChecked(false);
    }

    return(
        <div className="checkout-page mt-10 grid lg:grid-cols-2 grid-rows-12  gap-5 bg-white shadow-none">
            <div className="col-span-2 row-span-1">
                <SectionHeader name="CheckOut"/>
            </div>
            <div className="col-span-2 lg:px-10 row-span-1 grid grid-rows-1 gap-5 ">
                <h1 className="row-span-1 checkout-form-header text-red-700 text-center underline">This site is a pure demonstration and your data will not be saved anywhere!</h1>                
            </div>
            <div className="col-span-2 lg:px-10 px-0 grid grid-rows-6 gap-5 place-items-center">
                <h1 className="row-span-1 checkout-form-header">Personal Info's</h1>
                <input className="w-full" placeholder="Firstname"></input>
                <input className="w-full" placeholder="Lastname"></input>
                <input className="w-full" placeholder="Address"></input>
                <input className="w-full" placeholder="City"></input>
                <input className="w-full" placeholder="Country"></input>
            </div>
            <div className="col-span-2 lg:px-10 row-span-1 grid  gap-5 mt-10 lg:mt-0">
            <div className="grid place-content-center mx-auto mt-5">
                <div className="flex justify-center align-middle mb-2">
                    <input onClick={() => setDisclaimerChecked(!disclaimerChecked)} checked={disclaimerChecked} type="checkbox">                    
                    </input>
                    <a onClick={() => setDisclaimerChecked(!disclaimerChecked)} className="ml-2">I understand, that this order will not be processed. This is not an actual store!
                    </a>
                </div>
                {disclaimerChecked ? 
                <a onClick={handelCheckoutClicked} style={{width:"300px", minHeight:"40px"}} className="ease-in-out hover:scale-110 transition-all mx-auto font-medium item-cart-button lg:col-span-1 col-span-3 flex items-center justify-center mt-3 shadow-md">
                    Proceed   
                    </a>
                :
                <div style={{width:"300px", minHeight:"40px"}} className="mx-auto lg:col-span-1 col-span-3 flex items-center font-medium justify-center mt-3 shadow-md">Proceed</div>
            }
                
            </div>
            </div>
           

        </div>
    )
}

export default CheckOut;