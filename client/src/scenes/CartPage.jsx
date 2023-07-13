import SectionHeader from "../components/SectionHeader";
import CartItemPreview from "../components/CartItemPreview";

const CartPage = () => {

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
        <div className="mt-10 lg:p-10 p-0 bg-white shadow-md">            
            <SectionHeader name={"Shopping cart:"}/>
            <div className="grid lg:grid-cols-6 lg:visible invisible lg:h-auto h-0 my-3 cart-table-header">
                <h5 className="col-span-1 flex items-center justify-center"></h5>
                <h5 className="col-span-2 flex items-center justify-center">Name</h5>
                <h5 className="col-span-1 flex items-center justify-center">Quantity</h5>
                <h5 className="col-span-1 flex items-center justify-center">Price (pc.)</h5>
                <h5 className="col-span-1 flex items-center justify-center">Price</h5>
            </div>
            {items.map(item => (
                <CartItemPreview imageLink={item.imageLink} quantity={item.quantity} brandName={item.brandName} itemName={item.itemName} price={item.price}/>
            ))}
            <div className="colorfull-divider"></div>
            <div className="grid lg:grid-cols-6 grid-cols-3 place-items-center my-3 cart-table-header">
                <h5 className="lg:col-span-4 col-span-0 flex items-center justify-center"></h5>                
                <h5 className="col-span-1 flex items-center justify-center underline">TOTAL</h5>
                <h5 className="col-span-1 flex items-center justify-center underline">5.99$</h5>
            </div>
            <div className="grid lg:grid-cols-6 grid-cols-3 my-3 cart-table-header">
                <h5 className="col-span-5 flex items-center justify-center"></h5>                
                <a href="#" className="ease-in-out hover:scale-110 transition-all font-medium item-cart-button lg:col-span-1 col-span-3 flex items-center justify-center mt-3 shadow-md">To Checkout</a>
            </div>
        </div>
    )
};
export default CartPage;