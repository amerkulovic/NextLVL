const TextSection = (props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="bg-[#FFD523] border border-black rounded-full p-20 m-5">
          <img className="h-40 w-40" src={props.image} />
        </div>
        <h1 className="font-bold text-2xl">{props.text}</h1>
      </div>
    </>
  );
};

export default TextSection;
