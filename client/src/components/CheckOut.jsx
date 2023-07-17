import { useSelector } from "react-redux";
import SectionHeader from "./SectionHeader";
import { useState } from "react";

const CheckOut = ({handleCheckout}) => {

    const [disclaimerChecked, setDisclaimerChecked] = useState(false);
    const [processClicked, setProcessClicked] = useState(false);

    // Form Hooks
    const [formFilled, setFormFilled] = useState(false);
    const [showFormError, setShowFormError] = useState(false);
    const [showNextStep, setShowNextStep] = useState(false);
    const [formFirstName, setFormFirstName] = useState("");
    const [formLastName, setFormLastName] = useState("");
    const [formAdressName, setFormAdressName] = useState("");
    const [formCountryName, setFormCountryName] = useState("");

    const handelCheckoutClicked = () => {
        console.log("Checkout clicked!")
        handleCheckout();
        setDisclaimerChecked(false);
    }

    const handelCheckForm = () => {
        if(formFirstName.length < 1 || formLastName.length < 1 || formAdressName.length < 1 || formCountryName.length < 1)
        {
            setShowFormError(true);
            return;
        }

        setFormFilled(true);
    }

    return(
        <div className="checkout-page mt-10 grid lg:grid-cols-4 grid-rows-12  gap-5 bg-white shadow-none">
            <div className="col-span-4 row-span-1">
                <SectionHeader name="CheckOut"/>
            </div>
            <div className="col-span-4 lg:px-10 row-span-1 grid grid-rows-1 gap-5 ">
                <h1 className="text-md text-red-700 text-center">This site is a pure demonstration and your data will not be saved anywhere!</h1>                
            </div>
            <div className="lg:col-span-2 col-span-4 lg:px-10 px-5 grid grid-rows-6 gap-5 place-items-center">
                {!formFilled ? 
                <>
                <h1 className="row-span-1 checkout-form-header">Personal Info's</h1>
                <input value={formFirstName} onChange={(e) => setFormFirstName(e.target.value)} className="w-full" placeholder="Firstname"></input>
                <input value={formLastName} onChange={(e) => setFormLastName(e.target.value)} className="w-full" placeholder="Lastname"></input>
                <input value={formAdressName} onChange={(e) => setFormAdressName(e.target.value)} className="w-full" placeholder="Address"></input>
                <input value={formCountryName} onChange={(e) => setFormCountryName(e.target.value)} className="w-full" placeholder="City"></input>
                <a onClick={handelCheckForm} className="item-cart-button">Next</a>
                {showFormError ? <div className="text-red-600 font-bold">Please fill out the whole form.</div> : undefined}
                </>
                :
                <>
                <h1 className="row-span-1 checkout-form-header">Personal Info's</h1>
                <input disabled value={formFirstName} onChange={(e) => setFormFirstName(e.target.value)} className="w-full text-gray-400" placeholder="Firstname"></input>
                <input disabled value={formLastName} onChange={(e) => setFormLastName(e.target.value)} className="w-full text-gray-400" placeholder="Lastname"></input>
                <input disabled value={formAdressName} onChange={(e) => setFormAdressName(e.target.value)} className="w-full text-gray-400" placeholder="Address"></input>
                <input disabled value={formCountryName} onChange={(e) => setFormCountryName(e.target.value)} className="w-full text-gray-400" placeholder="City"></input>
                </>
}
            </div>
            {formFilled ? 
            <div className="lg:col-span-2 col-span-4 lg:px-10 row-span-1 grid  gap-5 lg:mt-0">
            <div className="grid grid-cols-1 place-items-center place-content-center mx-auto mt-5">
            {disclaimerChecked ? 
                <a onClick={handelCheckoutClicked} style={{width:"300px", height:"40px"}} className="mb-5 ease-in-out hover:scale-110 transition-all mx-auto font-medium item-cart-button lg:col-span-1 col-span-3 flex items-center justify-center mt-3 shadow-md">
                    Proceed to payment 
                    </a>
                :
                <div style={{width:"300px", height:"40px"}} className="mx-auto lg:col-span-1 col-span-3 mb-5 mt-3 flex items-center font-medium justify-center shadow-md">Please check the box</div>
            }
                <div className="mb-2 col-span-1 text-center p-5">
                    <input onClick={() => setDisclaimerChecked(!disclaimerChecked)} checked={disclaimerChecked} type="checkbox">                    
                    </input>
                    <a onClick={() => setDisclaimerChecked(!disclaimerChecked)} className="ml-2 mt-5 text-sm">I understand, that this order will not be processed. This is not an actual store.
                    </a>
                </div>
                
                
            </div>
        </div>
            :
            undefined
        }
            
           

        </div>
    )
}

export default CheckOut;