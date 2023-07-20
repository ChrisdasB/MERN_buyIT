/* Small site to give user some feedback on successfull order */
import SectionHeader from "../components/SectionHeader";
import { useDispatch } from "react-redux";
import { resetShoppingCart } from "../state";
import { useEffect } from "react";

const SuccessPage = () => {
  // Init dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetShoppingCart());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      style={{ height: "100vh" }}
      className="fade-in mt-10 lg:p-10 p-0 bg-white"
    >
      <SectionHeader name="" />
      <div className="grid grid-rows-6 grid-cols-1 mt-5">
        <div>
          <h3 className="text-center mx-auto success-header-text">
            Thank you for your order!
          </h3>
        </div>
        <div>
          <h3 className="text-center mx-auto mt-2">
            We will process your order as soon as possible.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
