/* Components to be used in the Shopping Cart to render out contents */
import { useNavigate } from "react-router-dom";

const CartItemPreview = ({
  handleRemoveShoppingCart,
  imageLink,
  quantity,
  brandName,
  itemName,
  price,
  description,
  descriptionHeader,
  specs,
  _id,
}) => {
  /* Init navigate */
  const navigate = useNavigate();

  /* If a user clicks on the name of an item in the card, redirect with given data to "/item" */
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
        _id,
      },
    });
  };

  return (
    /* Headers are only visible on small screens */
    <div className="fade-in cart-item-preview grid lg:grid-cols-7 grid-cols-3 grid-rows-2 lg:grid-rows-1 lg:my-3 my-0 cart-item-preview-shadow">
      {/* Delete item icon */}
      <div className="flex justify-center items-center col-span-1  lg:mr-5 mr-0">
        <a onClick={() => handleRemoveShoppingCart(_id)}>
          <img
            alt="X icon for deletion in shopping cart."
            style={{ maxHeight: "30px" }}
            src="./assets/icons/iconMenuOpen.png"
            className="hover:scale-110 flex items-center justify-center mx-0 col-span-1"
          ></img>
        </a>
      </div>
      {/* Item Image */}
      <div className="col-span-2 lg:col-span-1 grid-rows-2 flex items-center justify-center">
        <img
          alt={"Small product image of: " + itemName}
          className="lg:h-20 h-12 lg:w-auto lg:p-2 pt-1"
          style={{ maxHeight: "100%" }}
          src={imageLink}
        ></img>
      </div>
      {/* Item Name */}
      <div className="lg:h-20 h-10 lg:col-span-2 col-span-3 grid ls:place-content-center ls:place-items-center">
        <small className="invisible h-0">Item</small>
        <a
          className="color-clickable cart-item-name-link hover:scale-105 ease-in-out transition-all text-center text-sm"
          onClick={handleItemNavigation}
          target="_blank"
        >
          <h1>
            {brandName} - {itemName}
          </h1>
        </a>
      </div>
      {/* Quantity */}
      <div className="lg:h-20 h-10 col-span-1 grid place-content-center place-items-center  font-bold">
        <small className="lg:invisible lg:h-0 visible h-auto">Quanitity</small>
        <h1>{quantity} x</h1>
      </div>
      {/* Price per piece */}
      <div className="lg:h-20 h-10 col-span-1 grid place-content-center place-items-center font-bold ">
        <small className="lg:invisible lg:h-0 visible h-auto">per Piece</small>
        <h1>
          <small>$</small> {price}.-{" "}
        </h1>
      </div>
      {/* Total price for this item * quantity */}
      <div className="lg:h-20 h-10 col-span-1 grid place-content-center place-items-center font-bold ">
        <small className="lg:invisible lg:h-0 visible h-auto">Price</small>
        <h1>
          <small>$</small> {+price * +quantity}.-
        </h1>
      </div>
    </div>
  );
};

export default CartItemPreview;
