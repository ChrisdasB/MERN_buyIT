/* This scene will be rendered, if the user clicks on a category in the navbar */
import ItemPreview from "../components/ItemPreview";
import SectionHeader from "../components/SectionHeader";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Advertisement from "../components/Advertisement";

const CategoryPage = () => {
  // Init location & navigate
  const location = useLocation();
  const navigate = useNavigate();

  // variables from shop
  const items = useSelector((state) => state.shopItems);

  // Hooks
  const [sorting, setSorting] = useState("");

  /* Function to reidrect user, if the redux-store is empty */
  const startRedirect = () => {
    setTimeout(() => {
      navigate("/");
    }, "3000");
  };

  /* Prepare items from redux store for this category in an array */
  if (location.state != null && items.length != 0) {
    // Filter items for this category
    let newArray = items.filter(function (el) {
      return el.category == location.state.category;
    });

    // If sorting is set, sort items
    if (sorting != "") {
      /* Ascending */
      if (sorting == "asc") {
        newArray.sort((a, b) => {
          return a.price - b.price;
        });
        /* Descending */
      } else if (sorting == "desc") {
        newArray.sort((a, b) => {
          return b.price - a.price;
        });
        /* Brand */
      } else if (sorting == "brand") {
        newArray.sort((a, b) => {
          if (a.brandName < b.brandName) {
            return -1;
          }
          if (a.brandName > b.brandName) {
            return 1;
          }
          return 0;
        });
      }
    }

    return (
      <>
        <div className="category-page-container lg:px-10 p-0 bg-white">
          {/* Ad */}
          <Advertisement
            headline={"So be IT!"}
            info={"Some catchy, advertisement text!"}
          />
          <div className="mt-10"></div>
          {/* Section-Header */}
          <SectionHeader name={location.state.sectionHeader} />
          {/* Sorting */}
          <div className="grid place-content-around">
            <h1 className="text-center text-lg font-bold">Sort by:</h1>
            <div className="flex">
              <a onClick={() => setSorting("asc")}>
                <h1 className="px-3 text-lg">Price (asc.)</h1>
              </a>
              <a onClick={() => setSorting("desc")}>
                <h1 className="px-3 text-lg">Price (desc.)</h1>
              </a>
              <a onClick={() => setSorting("brand")}>
                <h1 className="px-3 text-lg">Brand</h1>
              </a>
            </div>
          </div>
          {/* Rendering the prepared items-array out in ItemPreview components */}
          <div
            key={location.state.category}
            className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 px-5 md:px-0 gap-0 "
          >
            {newArray.map((item) => (
              <div key={item._id}>
                <ItemPreview
                  imageLink={item.imageLink}
                  brandName={item.brandName}
                  itemName={item.itemName}
                  price={item.price}
                  description={item.description}
                  descriptionHeader={item.descriptionHeader}
                  specs={item.specs}
                  _id={item._id}
                />
              </div>
            ))}
          </div>
          {/* Add */}
          <Advertisement
            headline={"Some catchy Text!"}
            info={"If you read this, it worked!"}
          />
        </div>
      </>
    );
  } else {
    /* If error, show redirecting message and start redirection */
    return (
      <div
        style={{ height: "100vh" }}
        className="category-page-container mt-10 lg:p-10 p-0 bg-white"
      >
        <h1 className="text-lg font-bold text-center">
          Something went wrong ...
        </h1>
        <h1 className="text-lg font-bold text-center">
          We are redirecting to the homepage.
        </h1>
        {startRedirect()}
      </div>
    );
  }
};

export default CategoryPage;
