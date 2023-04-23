const SquareText = (props) => {
  return (
    <>
      <div className="flex flex-wrap justify-center flex-row p-5 w-11/12">
        {props.isImageLeft && <img src={props.image} style={{ width: "380px", height: "400px" }} />}
        <div className="w-3/5 m-7">
          <h1 className="font-bold text-center text-5xl pb-5">{props.header}</h1>
          <p className="font-light">{props.text}</p>
        </div>
        {!props.isImageLeft && <img src={props.image} style={{ width: "380px", height: "400px" }} />}
      </div>
    </>
  );
};

export default SquareText;
