const CircleText = (props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <img src={props.image} style={{ width: "400px", height: "400px", borderRadius: "50%", border: "5px solid #FFD523" }} />
        <h1 className="font-extralight text-2xl text-white m-5">{props.text}</h1>
      </div>
    </>
  );
};

export default CircleText;
