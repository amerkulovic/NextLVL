import "./ExerciseItem.css";

const ExerciseItem = (props) => {
  return (
    <>
      <div class="w-full max-w-sm bg-white border-2 border-yellow-400 shadow my-4 animation">
        <div className="flex flex-col text-center justify-center px-3">
          <h1 className="text-2xl font-semibold text-black pt-4 pb-2" style={{ fontFamily: "Bruno Ace SC" }}>
            {props.title}
          </h1>
          <h3 className="font-light text-black py-2" style={{ fontFamily: "Bruno Ace SC" }}>
            {props.muscle}
          </h3>
          <img class="p-6 h-96 w-80" src={props.image} alt="exercise image" />
        </div>
        <div class="px-5 pb-5">
          <div class="scrollbar">
            <p className="py-4">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExerciseItem;
