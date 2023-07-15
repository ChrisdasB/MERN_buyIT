const Footer = () => {
return(
    <>
        <div  className="bg-white grid lg:grid-cols-2 grid-cols-1 mt-10 px-5 py-10 shadow-md border-t-2">
            <div name="contact" className="grid grid-row-12 lg:border-r-2 lg:pb-0 pb-2 border-b-2 lg:border-b-0 ml-5 border-gray-600">
                <p className="row-span-2 text-lg underline">Contact us:</p>
                <p className="row-span-1 text-md text-blue-700">Tel.</p>
                <p className="row-span-1 text-sm">+264 123 4567</p>
                <p className="row-span-1 text-md text-blue-700">Mail</p>
                <p className="row-span-1 text-sm">exmaple@company.com</p>
                <p className="row-span-1 text-md text-blue-700">Address</p>
                <p className="row-span-1 text-sm">Example Street 1, 10005 Windhoek, Namibia</p>
            </div>
            <div name="contact" className="grid grid-row-12 lg:ml-10 px-5 lg:px-0 mt-3 lg:mt-0">
                <p className="row-span-2 text-lg underline">Impressum:</p>
                <p className="row-span-1 text-md text-blue-700">CEO:</p>
                <p className="row-span-1 text-sm">Chris Schmidt v. W.</p>
                <p className="row-span-1 text-md text-blue-700">Info:</p>
                <p className="row-span-1 text-sm">Some Info</p>                
            </div>
        </div>
    </>
)
}

export default Footer;