import "./trainers.css";

const TrainerProfile = (props) => {
  return (
    <div className="mt-5 mb-40 trainer-card">
      <img className="trainer-image" src={props.image} />
      <div className="absolute bottom-8 title text-3xl">
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default TrainerProfile;
