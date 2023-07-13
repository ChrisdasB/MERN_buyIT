import ItemPreview from "./ItemPreview";
import SectionHeader from "./SectionHeader";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const items = [
  {
  imageLink: "./assets/images/TestImage.jpeg",
  brandName: "BRAND",
  itemName: "X400 dFH",
  price: "599,99"},
  {
  imageLink: "./assets/images/TestImage.jpeg",
  brandName: "Other Brand",
  itemName: "X400 dFH",
  price: "599,99"},
  {
  imageLink: "./assets/images/TestImage.jpeg",
  brandName: "HUAWEI",
  itemName: "X400 dFH",
  price: "599,99"},
  {
  imageLink: "./assets/images/TestImage.jpeg",
  brandName: "HP",
  itemName: "X400 dFH",
  price: "599,99"},
  {
  imageLink: "./assets/images/TestImage.jpeg",
  brandName: "AMD",
  itemName: "X400 dFH",
  price: "599,99"},
  {
      imageLink: "./assets/images/TestImage.jpeg",
      brandName: "HUAWEI",
      itemName: "X400 dFH",
      price: "599,99"},
      {
      imageLink: "./assets/images/TestImage.jpeg",
      brandName: "HP",
      itemName: "X400 dFH",
      price: "599,99"},
      {
      imageLink: "./assets/images/TestImage.jpeg",
      brandName: "AMD",
      itemName: "X400 dFH",
      price: "599,99"},
      {
          imageLink: "./assets/images/TestImage.jpeg",
          brandName: "HUAWEI",
          itemName: "X400 dFH",
          price: "599,99"},
          {
          imageLink: "./assets/images/TestImage.jpeg",
          brandName: "HP",
          itemName: "X400 dFH",
          price: "599,99"},
          {
          imageLink: "./assets/images/TestImage.jpeg",
          brandName: "AMD",
          itemName: "X400 dFH",
          price: "599,99"},
]


const ItemsShowContainer =  () => {

    const items = [
        {
        imageLink: "./assets/images/TestImage.jpeg",
        brandName: "BRAND",
        itemName: "X400 dFH",
        price: "599,99"},
        {
        imageLink: "./assets/images/TestImage.jpeg",
        brandName: "Other Brand",
        itemName: "X400 dFH",
        price: "599,99"},
        {
        imageLink: "./assets/images/TestImage.jpeg",
        brandName: "HUAWEI",
        itemName: "X400 dFH",
        price: "599,99"},
        {
        imageLink: "./assets/images/TestImage.jpeg",
        brandName: "HP",
        itemName: "X400 dFH",
        price: "599,99"},
        {
        imageLink: "./assets/images/TestImage.jpeg",
        brandName: "AMD",
        itemName: "X400 dFH",
        price: "599,99"},
        {
            imageLink: "./assets/images/TestImage.jpeg",
            brandName: "HUAWEI",
            itemName: "X400 dFH",
            price: "599,99"},
            {
            imageLink: "./assets/images/TestImage.jpeg",
            brandName: "HP",
            itemName: "X400 dFH",
            price: "599,99"},
            {
            imageLink: "./assets/images/TestImage.jpeg",
            brandName: "AMD",
            itemName: "X400 dFH",
            price: "599,99"},
            {
                imageLink: "./assets/images/TestImage.jpeg",
                brandName: "HUAWEI",
                itemName: "X400 dFH",
                price: "599,99"},
                {
                imageLink: "./assets/images/TestImage.jpeg",
                brandName: "HP",
                itemName: "X400 dFH",
                price: "599,99"},
                {
                imageLink: "./assets/images/TestImage.jpeg",
                brandName: "AMD",
                itemName: "X400 dFH",
                price: "599,99"},
    ]

    var key = 0;

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1400 },
          items: 5,
          slidesToSlide: 3 // optional, default to 1.
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

    // TESTING //

    return(
        <>
            <div className="mt-10">
            <SectionHeader name={"Explore our selection ..."}/>
            </div> 




            <Carousel showDots={true} responsive={responsive}>
            {items.map(item => (
            <ItemPreview imageLink={item.imageLink} brandName={item.brandName} itemName={item.itemName} price={item.price} key={key++}/>
        ))}
            </Carousel>





            <div name="items-show-container" className="mt-5 flex gap-x-5 items-center justify-center gap-y-5 ">
        
        </div>         
        </>
    )

}

export default ItemsShowContainer;