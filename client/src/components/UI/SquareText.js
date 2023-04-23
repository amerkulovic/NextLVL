const SquareText = (props) => {
  return (
    <>
      <div>
        {props.isImageLeft && <img src={props.image} style={{ width: "400px", height: "400px" }} />}
        <div>
          <h1>{props.header}</h1>
          <p>{props.text}</p>
        </div>
        {!props.isImageLeft && <img src={props.image} />}
      </div>
    </>
  );
};

export default SquareText;
