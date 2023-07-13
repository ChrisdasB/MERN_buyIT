import SectionHeader from "../components/SectionHeader";

const CheckOut = () => {
    return(
        <div className="checkout-page mt-10 grid lg:grid-cols-2 grid-rows-12 lg:p-10 p-5 gap-5 bg-white shadow-none lg:shadow-md">
            <div className="col-span-2 row-span-1">
                <SectionHeader name="CheckOut"/>
            </div>
            <div className="col-span-2 lg:col-span-1 lg:px-10 row-span-1 grid grid-rows-6 gap-5 ">
                <h1 className="row-span-1 checkout-form-header">Personal Info's</h1>
                <input placeholder="Firstname"></input>
                <input placeholder="Lastname"></input>
                <input placeholder="Address"></input>
                <input placeholder="City"></input>
                <input placeholder="Country"></input>
            </div>
            <div className="col-span-2 lg:col-span-1 lg:px-10 row-span-1 grid grid-rows-6 gap-5 mt-10 lg:mt-0">
                <h1 className="row-span-1 checkout-form-header">Payment</h1>
                <h1 className="flex">Total amount: <h1  className="checkout-total-amount ml-2">$ 1599.99 </h1></h1>
                <input placeholder="Lastname"></input>
                <input placeholder="Address"></input>
                <input placeholder="City"></input>
                <input placeholder="Country"></input>
            </div>
            <div className="grid place-content-center place-items-center col-span-2 mt-5">
                <div className="flex items-center mb-2">
                    <input type="checkbox">                    
                    </input>
                    <small className="ml-2">I understand, that i will be legaly obligated to pay!
                    </small>
                </div>
                <a href="#" style={{minHeight:"40px"}} className="item-cart-button">Place Order</a>
            </div>

        </div>
    )
}

export default CheckOut;