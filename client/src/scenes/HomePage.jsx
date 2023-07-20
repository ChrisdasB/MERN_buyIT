// Import components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ItemsShowContainer from "../components/ItemsShowContainer";
import { useEffect, useState } from "react";
import { setShopItems } from "../state";
import { useDispatch, useSelector } from "react-redux";
import ErrorComponent from "../components/Error";
import Advertisement from "../components/Advertisement";

const HomePage = () => {
  // Variable
  const carouselItemCount = 6;

  // Hooks
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Get random Categorys adn extract two random ones
  var categorys = ["pc", "laptop", "monitor", "peripheral"];
  var category1 = categorys
    .splice((Math.random() * categorys.length) | 0, 1)
    .toString();
  var category2 = categorys
    .splice((Math.random() * categorys.length) | 0, 1)
    .toString();

  // Init dispatch
  const dispatch = useDispatch();

  /* fetch the full store on site load */
  const GetAllItems = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_SERVER_ROUTE + "items/all",
        {
          method: "GET",
          headers: { key: process.env.REACT_APP_API_KEY },
        }
      );

      const allItems = await response.json();
      /* If we have a message, we have an error */
      const { message } = allItems;
      if (message) {
        setError(true);
      }
      /* Fill redux-store with all items */
      dispatch(setShopItems({ items: allItems }));

      /* Start showing items after 0.5 sec */
      setTimeout(() => {
        setLoading(false);
      }, "500");
    } catch (err) {
      /* Error handling */
      setError(true);
      console.log("An error occured. Error: " + err.message);
    }
  };

  useEffect(() => {
    /* Empty out redux-store on load */
    dispatch(setShopItems({ items: [] }));
    /* Fetch new data and refill redux.store */
    GetAllItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* If error, show error component */}
      {error ? (
        <ErrorComponent />
      ) : (
        <div className="category-page-container lg:px-10 p-0 bg-white">
          {/* Ad */}
          <Advertisement
            headline={"Accelarate your Work!"}
            info={"With tech from Buy IT!"}
          />
          {/* IF we are still loading, show a little text */}
          {loading ? (
            <div
              style={{ minHeight: "100vh" }}
              className="text-center text-lg "
            >
              <h1 className="animate-pulse row-span-1 font-extrabold mt-5">
                Loading IT ...
              </h1>
            </div>
          ) : (
            /* If loading is done, show all contents */
            <>
              {/* Showcontainer for first random chosen catgory */}
              <ItemsShowContainer
                category={category1}
                itemCount={carouselItemCount}
              />
              {/* Ad */}
              <Advertisement
                headline={"Gaming on a new Level!"}
                info={"Just finish it!"}
              />
              {/* Showcontainer for second random chosen catgory */}
              <ItemsShowContainer
                category={category2}
                itemCount={carouselItemCount}
              />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default HomePage;
