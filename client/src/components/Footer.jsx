/* Footer component, which gets renders on every site */
const Footer = () => {
  return (
    <>
      <div className="bg-white grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-1 mt-10 lg:px-20 px-0 mb-20 footer">
        <div
          name="contact"
          className="grid grid-row-5 lg:border-r-2 lg:pb-0 pb-2 border-b-2 lg:border-b-0 ml-5 border-gray-600"
        >
          <div className="row-span-2 underline">Contact us:</div>
          <div className="row-span-1 lg:flex text-blue-700">
            Tel: <p className="text-black lg:pl-2 pl-0">+264 123 4567</p>
          </div>
          <div className="row-span-1 lg:flex text-blue-700">
            Mail: <p className="text-black lg:pl-2 pl-0">example@company.com</p>
          </div>
          <div className="row-span-1 lg:flex text-blue-700">
            Address:{" "}
            <p className="text-black lg:pl-2 pl-0">
              Example Street 1, 10005 Windhoek, Namibia
            </p>
          </div>
        </div>
        <div
          name="contact"
          className="grid grid-row-12 lg:ml-10 px-5 lg:px-0 mt-3 lg:mt-0"
        >
          <div className="row-span-2 underline">Legal Notice:</div>
          <div className="row-span-1 lg:flex text-blue-700">
            CEO: <p className="text-black lg:pl-2 pl-0">Chris Schmidt v. W.</p>
          </div>
          <div className="row-span-1 lg:flex text-blue-700">
            Info: <p className="text-black lg:pl-2 pl-0">Some Info</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
