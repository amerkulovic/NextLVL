const SquareText = (props) => {
  return (
    <>
      <div className="flex flex-wrap justify-center flex-row p-5 w-11/12 m-5">
        {props.isImageLeft && <img src={props.image} style={{ width: "400px", height: "400px", margin: "15px" }} className="side-animation max-lg:order-3 max-lg:m-0" />}
        <div className="w-3/5 mx-4 p-5 max-lg:mx-0 max-lg:p-0">
          <h1 className="font-bold text-center text-5xl pb-5 max-lg:order-1" style={{ fontFamily: "Bruno Ace SC" }}>
            {props.header}
          </h1>
          <p className="font-light max-lg:order-2">{props.text}</p>
        </div>
        {!props.isImageLeft && <img src={props.image} style={{ width: "400px", height: "400px", margin: "15px" }} className="right-side-animation max-lg:m-0" />}
      </div>
    </>
  );
};

export default SquareText;
