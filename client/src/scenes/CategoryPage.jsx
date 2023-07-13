import NavBar from "../components/NavBar";
import ItemPreview from "../components/ItemPreview";
import SectionHeader from "../components/SectionHeader";
import { useLocation } from "react-router-dom";

const CategoryPage= () => {
    // Init location
    const location = useLocation();


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

    return(
        <div className="category-page-container mt-10 lg:p-10 p-0 bg-white shadow-md">
        <SectionHeader name={location.state.sectionHeader}/>
        <div className="grid place-content-around">
            <h1 className="text-center text-lg">Sort by:</h1>
            <div className="flex">
                <a href='#'><h1 className="px-3">Price</h1></a>
                <a href='#'><h1 className="px-3">Brand</h1></a>
                <a href='#'><h1 className="px-3">Stock</h1></a>
            </div>

        </div>
        <div className="grid lg:grid-cols-5 p-x gap-0 ">
        
        {items.map(item => (
            <ItemPreview imageLink={item.imageLink} brandName={item.brandName} itemName={item.itemName} price={item.price}/>
        ))}
            </div>
        </div>
    )
}

export default CategoryPage;