// Import components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ItemsShowContainer from "../components/ItemsShowContainer";

const HomePage = () => {
    return(
        <>  
            <div className="flex items-center justify-center mt-5">
            <img style={{maxHeight:"200px"}} src="https://cdn.macovi.de/images/banner/1688037442.webp"></img>
            </div>
            <ItemsShowContainer/>
            <ItemsShowContainer/>                       
        </>
    )
}

export default HomePage;