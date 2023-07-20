/* A small component that should represent an advertisement */

const Advertisement = ({ headline, info }) => {
  return (
    <div className="mt-5 mx-2">
      <small>Advertisement</small>

      <div
        style={{ height: "4rem" }}
        className="advertisement-container grid grid-cols-8 p-0 bg-black text-white"
      >
        <h1 className="justify-start col-span-8 text-center">{headline}</h1>
        <small className="justify-start col-span-8 text-center">{info}</small>
      </div>
    </div>
  );
};

export default Advertisement;
