import ItemPreview from "./ItemPreview";
import SectionHeader from "./SectionHeader";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector } from "react-redux";
import { Responsive } from "./ResponsiveSlider";



const ItemsShowContainer = ({category, itemCount}) => {
  // Shuffle array to give different items every time on HomePage
  const allItems = useSelector(state => state.shopItems);
  const objCopy = [...allItems];
  const shuffledArray = objCopy.sort((a, b) => 0.5 - Math.random());

  // Get right header
  var header = "";
  if(category == "pc") {header="PCs"}
  else if(category == "monitor") {header="Monitors"}
  else if(category == "laptop") {header="Laptops"}
  else if(category == "peripheral") {header="Peripherals"}

  // Filter out *itemCount* number of *category*
  let filterCounter = 0;
  let newArray = shuffledArray.filter(function (el) {
    if(filterCounter == itemCount){
      return;
    }

    else if(el.category == category)
    {
      filterCounter++;
      return el;
    }
      
      return;
}
);
    // To make the console SHUT UP, give it a key ...
    var key = 0;

    // Set Breakpoints for carousel
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1400 },
          items: 5,
          slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 800 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 800, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

      console.log(newArray.length);

    return(
        <>
            <div className="mt-10 fade-in">
            <SectionHeader name={"Explore our " + header}/>
            </div> 
            <div className="p-10 flex items-center justify-center">
            <Responsive className="fade-in" items={newArray}/>
            </div>

            <div name="items-show-container" className="mt-5 flex gap-x-5 items-center justify-center gap-y-5 ">       
        </div>         
        </>
    )

}

export default ItemsShowContainer;