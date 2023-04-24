const TrainerProfile = (props) => {
  return (
    <div className="bg-yellow-400 my-4 relative" style={{ height: "500px", width: "420px" }}>
      <div className="text-center flex flex-col justify-center items-center h-full">
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default TrainerProfile;
