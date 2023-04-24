import TrainerProfile from "../components/UI/TrainerProfile";
import tanktop from "../images/black-tanktop.jpg";
import hayley from "../images/hayley.jpg";
import redtop from "../images/red-tanktop.jpg";
import gordon from "../images/gordon.jpg";
import buffguy from "../images/buff-guy.jpg";
import julia from "../images/julia.jpg";

const Trainers = () => {
  return (
    <>
      <div className="pt-40 bg-[#2C2E43]" />
      <div className="flex flex-wrap justify-around">
        <TrainerProfile name="Jack" desc="Weightlifting" image={tanktop} />
        <TrainerProfile name="Hayley" desc="Crossfit" image={hayley} />
        <TrainerProfile name="Dominic" desc="Powerlifting" image={buffguy} />
        <TrainerProfile name="Julia" desc="Yoga" image={julia} />
        <TrainerProfile name="Ranjeet" desc="Calisthenics" image={redtop} />
        <TrainerProfile name="Gordon" desc="Crossfit" image={gordon} />
      </div>
    </>
  );
};

export default Trainers;
