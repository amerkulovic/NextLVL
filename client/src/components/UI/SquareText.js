const SquareText = (props) => {
  return (
    <>
      <div className="flex flex-wrap justify-center flex-row p-5 w-11/12 m-5">
        {props.isImageLeft && <img src={props.image} style={{ width: "380px", height: "400px", border: "4px solid black", margin: "15px" }} />}
        <div className="w-3/5 mx-4 p-5">
          <h1 className="font-bold text-center text-5xl pb-5" style={{ fontFamily: "Bruno Ace SC" }}>
            {props.header}
          </h1>
          <p className="font-light">{props.text}</p>
        </div>
        {!props.isImageLeft && <img src={props.image} style={{ width: "380px", height: "400px", border: "4px solid black", margin: "15px" }} />}
      </div>
    </>
  );
};

export default SquareText;
