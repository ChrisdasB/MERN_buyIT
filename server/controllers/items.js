import Items from "../models/Item.js";

/* Get and respond with all items from the store */
export const getAllItems = async (req, res) => {
  try {
    const response = await Items.find();

    res.status(200).json(response);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

/* Resolve given shopping cart items and respond with updated data */
export const getCartItems = async (req, res) => {
  try {
    const { currentCart } = req.body;
    var totalPrice = 0;
    var response = [];
    for (var i = 0; i < currentCart.length; i++) {
      const currentResponse = await Items.findOne({
        _id: currentCart[i]["id"],
      });
      totalPrice += currentResponse.price * currentCart[i]["quantity"];
      response.push(currentResponse);
    }
    res.status(200).json({ updatedItems: response, totalPrice: totalPrice });
  } catch (err) {
    console.log("Something went wrong!" + err.message);
    res.status(400).json({ message: err.message });
  }
};
