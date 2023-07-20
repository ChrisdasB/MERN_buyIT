/* Component to show random items of a certain category on the HomePage */
import SectionHeader from "./SectionHeader";
import { useSelector } from "react-redux";
import { Responsive } from "./ResponsiveSlider";

const ItemsShowContainer = ({ category, itemCount }) => {
  /* Get all items from redux store */
  const allItems = useSelector((state) => state.shopItems);
  /* Copy all items into new array */
  const objCopy = [...allItems];
  /* Shuffle the new array to get random items each time */
  const shuffledArray = objCopy.sort((a, b) => 0.5 - Math.random());

  // Get the right header text for current category
  var header = "";
  if (category == "pc") {
    header = "PCs";
  } else if (category == "monitor") {
    header = "Monitors";
  } else if (category == "laptop") {
    header = "Laptops";
  } else if (category == "peripheral") {
    header = "Peripherals";
  }

  // Filter out *itemCount* number of *category* and put them in a new array
  let filterCounter = 0;
  let newArray = shuffledArray.filter(function (el) {
    if (filterCounter == itemCount) {
      return;
    } else if (el.category == category) {
      filterCounter++;
      return el;
    }

    return;
  });

  return (
    <>
      <div className="mt-10 fade-in">
        {/* Section Header */}
        <SectionHeader name={"Explore our " + header} />
      </div>
      <div className="p-10 flex items-center justify-center">
        {/* Render carousel component */}
        <Responsive className="fade-in" items={newArray} />
      </div>
    </>
  );
};

export default ItemsShowContainer;
