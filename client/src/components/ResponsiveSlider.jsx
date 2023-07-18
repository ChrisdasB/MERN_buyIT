import React, { useState } from "react";
import Slider from "react-slick";
import ItemPreview from "./ItemPreview";
import { useRef } from "react";

export function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div>
       </div>
    );
  }

export const Responsive = ({items}) => {

    // Hook for custom arrows
    const slider = React.useRef(null);
   
      var settings = {
        dots: true,        
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SampleNextArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
                dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
                dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
      };
      console.log(items);
      const test = ["1", "2", "3"]
      return (
        <div className="">
        {items == undefined ? undefined : 
            <div className="grid grid-cols-12">
                <div className="md:col-span-1 md:visible invisible h-0 md:h-auto flex items-center justify-center"><a onClick={() => slider?.current?.slickPrev()}><img style={{transform:"rotate(180deg)", height:"50px"}} src="./assets/icons/iconArrow.png"></img></a></div>
                <div className="col-span-12 md:col-span-10 lg:m-5 m-0">
            <Slider ref={slider} {...settings}>
            {items.map(item => (
             
             <>
              { <ItemPreview 
                  imageLink={item.imageLink} 
                  brandName={item.brandName} 
                  itemName={item.itemName} 
                  price={item.price} 
                  description={item.description}
                  descriptionHeader={item.descriptionHeader}
                  specs={item.specs}
                  _id={item._id}
              /> }
              </>
          ))}
         
            </Slider>
            </div>
            <div className="md:col-span-1 md:visible invisible h-0 md:h-auto flex items-center justify-end"><a onClick={() => slider?.current?.slickNext()}><img style={{height:"50px"}} src="./assets/icons/iconArrow.png"></img></a></div>
          </div>
        }
       </div>
      );
  }