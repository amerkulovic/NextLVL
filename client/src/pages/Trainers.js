import TrainerProfile from "../components/UI/TrainerProfile";

const Trainers = () => {
  return (
    <>
      <div className="pt-40 bg-[#2C2E43]" />
      <div className="flex flex-wrap justify-around">
        <TrainerProfile name="Jack" desc="Weightlifting" />
        <TrainerProfile name="Jack" desc="Weightlifting" />
        <TrainerProfile name="Jack" desc="Weightlifting" />
        <TrainerProfile name="Jack" desc="Weightlifting" />
        <TrainerProfile name="Jack" desc="Weightlifting" />
        <TrainerProfile name="Jack" desc="Weightlifting" />
      </div>
    </>
  );
};

export default Trainers;
