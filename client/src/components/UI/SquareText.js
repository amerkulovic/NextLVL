const SquareText = (props) => {
  return (
    <>
      <div className="flex flex-wrap justify-center flex-row p-5 w-11/12 m-5">
        {props.isImageLeft && <img src={props.image} style={{ width: "400px", height: "400px", margin: "15px" }} className="side-animation" />}
        <div className="w-3/5 mx-4 p-5">
          <h1 className="font-bold text-center text-5xl pb-5" style={{ fontFamily: "Bruno Ace SC" }}>
            {props.header}
          </h1>
          <p className="font-light">{props.text}</p>
        </div>
        {!props.isImageLeft && <img src={props.image} style={{ width: "400px", height: "400px", margin: "15px" }} className="right-side-animation" />}
      </div>
    </>
  );
};

export default SquareText;
