/* Package: react-slick */
/* Carousel slider for HomePage */

import React, { useState } from "react";
import Slider from "react-slick";
import ItemPreview from "./ItemPreview";

export const Responsive = ({ items }) => {
  // Hook for custom arrows
  const slider = React.useRef(null);

  /* Setting for the carousel slider */
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div>
      {/* If we have items, render nothing, else render component */}
      {items === undefined ? undefined : (
        <div className="grid grid-cols-12">
          {/* Custom arrow left */}
          <div className="md:col-span-1 md:visible invisible h-0 md:h-auto flex items-center justify-center">
            <a onClick={() => slider?.current?.slickPrev()}>
              <img
                style={{ transform: "rotate(180deg)", height: "50px" }}
                src="./assets/icons/iconArrow.png"
              ></img>
            </a>
          </div>
          <div className="col-span-12 md:col-span-10 lg:m-5 m-0">
            {/* Slider Component mapping over the items and filling it with ItemPreview Components*/}
            <Slider ref={slider} {...settings}>
              {items.map((item) => (
                <div key={item._id}>
                  {
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
                  }
                </div>
              ))}
            </Slider>
          </div>
          {/* Custom arrow right */}
          <div className="md:col-span-1 md:visible invisible h-0 md:h-auto flex items-center justify-end">
            <a onClick={() => slider?.current?.slickNext()}>
              <img
                style={{ height: "50px" }}
                src="./assets/icons/iconArrow.png"
              ></img>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
