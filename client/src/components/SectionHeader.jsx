/* Component to serve as a visual divider with header text */

const SectionHeader = ({ name }) => {
  return (
    <>
      <div
        name="section-header"
        className="container w-full h-10 grid grid-cols-2"
      >
        <div className="col-span-2 flex justify-start px-4 items-center section-header">
          <h2>{name}</h2>
        </div>
        <div className="colorfull-divider col-span-2"></div>
      </div>
    </>
  );
};

export default SectionHeader;
