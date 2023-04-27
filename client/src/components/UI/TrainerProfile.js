import "./trainers.css";

const TrainerProfile = (props) => {
  return (
    <div className="mt-5 mb-40 mx-1 trainer-card animation">
      <img className="trainer-image" src={props.image} />
      <div className="absolute bottom-8 title">
        <h1 className="text-4xl" style={{ fontFamily: "Bruno Ace SC" }}>
          {props.name}
        </h1>
        <p className="font-extralight text-2xl">{props.desc}</p>
      </div>
    </div>
  );
};

export default TrainerProfile;
