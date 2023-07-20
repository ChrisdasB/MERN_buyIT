import SectionHeader from "../components/SectionHeader";
import CartItemPreview from "../components/CartItemPreview";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState, useEffect, useRef } from "react";
import { setShowItemRemoved } from "../state";
import { useDispatch } from "react-redux";
import { removeShoppingCart } from "../state";
import CheckOut from "../components/CheckOut";
import ErrorComponent from "../components/Error";

const CartPage = () => {
  // Get data from store
  const currentCart = useSelector((state) => state.shoppingCart);
  const showItemRemoved = useSelector((state) => state.showItemRemoved);

  // Inti dispatch
  const dispatch = useDispatch();

  // Hooks
  const [updatedCartItems, setUpdatedCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const checkoutSection = useRef(null);

  /* Trigger on load by useEffect. Fetches the data of the current shopping cart from the server */
  const resolveCartItems = async () => {
    try {
      /* If we have no data in shopping cart, return */
      if (currentCart.length < 1) {
        setLoading(false);
        return;
      }

      /* Fetch from backend */
      const response = await fetch(
        process.env.REACT_APP_SERVER_ROUTE + "items/cart",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            key: process.env.REACT_APP_API_KEY,
          },
          body: JSON.stringify({ currentCart: currentCart }),
        }
      );

      /* Deconstruct variables from response */
      var { updatedItems, totalPrice, message } = await response.json();

      /* If we have a message variable, we have an error. Triggers rendering of error component */
      if (message != null) {
        console.log("An error occured. Error: " + message);
        setError(true);
        return;
      }

      // Add quantitys from local cart into the response array depending on the id
      for (var i = 0; i < updatedItems.length; i++) {
        for (var ii = 0; ii < currentCart.length; ii++) {
          if (updatedItems[i]["_id"] == currentCart[ii]["id"]) {
            updatedItems[i].quantity = currentCart[ii]["quantity"];
          }
        }
      }

      /* Fill state variables with updated values from backend */
      setUpdatedCartItems(updatedItems);
      setTotalPrice(totalPrice.toFixed(0));
      /* Set loading state to false to display the actual cart items */
      setLoading(false);
    } catch (err) {
      /* If fetch did not work, show error */
      setError(true);
      console.log("An error occured. Error: " + err.message);
    }
  };

  /* Triggers the render of the Checkout Component and scrolls to it */
  const handleShowCheckout = (elementRef) => {
    setShowCheckout(true);
    setTimeout(() => {
      elementRef.current?.scrollIntoView({ behavior: "smooth" });
    }, "100");
  };

  /* Handles the removal of a shopping cart item */
  function handleRemoveShoppingCart(_id) {
    dispatch(setShowItemRemoved({ value: true }));
    dispatch(removeShoppingCart({ id: _id }));
    window.location.reload(false);
  }

  /* Sends a post request with the current shoppingCart data to the backend to generate a Stripe checkout url */
  const handleCheckout = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_SERVER_ROUTE + "create-checkout-session",
        {
          method: "POST",
          headers: {
            key: process.env.REACT_APP_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: updatedCartItems,
          }),
        }
      );

      /* Extract the url and redirect browser */
      const stripeResponse = await response.json();
      const { session } = stripeResponse;
      const { url } = session;
      if (url === undefined) {
        setError(true);
        console.log("Stripe did not answer with valid url!");
      }
      window.location = url;
    } catch (err) {
      /* Error handling */
      setError(true);
      console.log("An error occured. Error: " + err.message);
    }
  };

  /* Start timer to close removed message after 3 sec */
  if (showItemRemoved) {
    setTimeout(() => {
      dispatch(setShowItemRemoved({ value: false }));
    }, "3000");
  }

  /* Fetch shopping cart data on load */
  useEffect(() => {
    resolveCartItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* If we had an error, show error component */}
      {error ? (
        <ErrorComponent />
      ) : (
        <>
          {/* If we have no items */}
          {updatedCartItems.length < 1 && (
            <div
              style={{ height: "100vh" }}
              className="fade-in mt-10 lg:p-10 p-0 bg-white"
            >
              <SectionHeader name={"Shopping cart:"} />
              <h1 className="text-center text-lg font-bold mt-5">
                {/* And we are still loading and have no items, show apropriate message */}
                {loading ? (
                  <>Looking up your awesome choices!</>
                ) : (
                  /* Abd we are not loading and have no items, show empty cart message */
                  <>You have no items in your cart.</>
                )}
              </h1>
            </div>
          )}
          {/* If we have items, render full cart */}
          {updatedCartItems.length > 0 && (
            <div className="fade-in mt-10 lg:p-10 pb-5 bg-white">
              {/* Section Header */}
              <SectionHeader name={"Shopping cart:"} />
              {/* List Headers (only visible on larger screens) */}
              <div className="grid lg:grid-cols-7 lg:visible invisible lg:h-auto h-0 my-3 cart-table-header">
                <h5 className="col-span-2 flex items-center justify-center"></h5>
                <h5 className="col-span-2 flex items-center justify-center">
                  Name
                </h5>
                <h5 className="col-span-1 flex items-center justify-center">
                  Quantity
                </h5>
                <h5 className="col-span-1 flex items-center justify-center">
                  Price (pc.)
                </h5>
                <h5 className="col-span-1 flex items-center justify-center">
                  Price
                </h5>
              </div>
              {/* Render out a CartItemPreview component for every item */}
              <div>
                {updatedCartItems.map((item) => (
                  <div key={item._id}>
                    <CartItemPreview
                      imageLink={item.imageLink}
                      quantity={item.quantity}
                      brandName={item.brandName}
                      itemName={item.itemName}
                      price={item.price}
                      description={item.description}
                      descriptionHeader={item.descriptionHeader}
                      specs={item.specs}
                      id={item._id}
                      handleRemoveShoppingCart={handleRemoveShoppingCart}
                    />
                  </div>
                ))}
              </div>
              <div className="colorfull-divider"></div>
              {/* Total values under cart items */}
              <div className="grid lg:grid-cols-7 grid-cols-3 place-items-center my-3 cart-table-header">
                <h5 className="lg:col-span-5 col-span-0 flex items-center justify-center"></h5>
                <h5 className="col-span-1 flex items-center justify-center underline">
                  Total:
                </h5>
                <h5 className="col-span-1 items-center justify-center">
                  <small style={{ textDecoration: "none" }}>$</small>{" "}
                  {totalPrice}.-
                </h5>
              </div>
              {/* If checkout is not open yet, render 'To Checkout' button */}
              {!showCheckout ? (
                <div className="grid place-content-center">
                  <a
                    onClick={() => handleShowCheckout(checkoutSection)}
                    style={{ minWidth: "300px", minHeight: "40px" }}
                    className="ease-in-out hover:scale-110 transition-all font-medium item-cart-button mt-3 shadow-md"
                  >
                    To Checkout
                  </a>
                </div>
              ) : undefined}
              {/* If there was an item removed, render message on top of screen */}
              {showItemRemoved ? (
                <div
                  className="bg-green-300 cart-added-message fade-in"
                  name="cart-added-message"
                >
                  <h1 className="text-center">
                    Item has been removed from your Cart
                  </h1>
                </div>
              ) : undefined}
              <div ref={checkoutSection}>
                {/* If checkout is opened, render CheckOut component */}
                {showCheckout ? (
                  <CheckOut handleCheckout={handleCheckout} />
                ) : undefined}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
export default CartPage;
