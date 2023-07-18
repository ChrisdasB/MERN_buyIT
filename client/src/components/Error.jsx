import SectionHeader from "./SectionHeader";

const ErrorComponent = () => {

    return(
        <div style={{height:"100vh"}} className="mt-10 lg:p-10 p-0 bg-white">
            <div className="">
           <SectionHeader name={"Oh no ..."}/>
           <div>
            <h1 className="mt-10 text-lg font-bold text-center">Our service is currently unavailable.</h1>
            <h1 className="text-center">We are sorry for the inconvenience.</h1>
            <div className="flex items-center justify-center mt-5">
                <img style={{height:"100px"}} src="./assets/icons/iconSadSmiley.png"></img>
            </div>
            <h1 className="mt-10 text-lg font-bold text-center">Please try again later!</h1>
            
            </div>
            </div>
        </div>
    )

}

export default ErrorComponent;