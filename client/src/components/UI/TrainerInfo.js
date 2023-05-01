const TrainerInfo = (props) => {
  return (
    <div className="flex flex-row max-md:flex-col max-md:items-center justify-center">
      <img src={props.image} className="border-2 border-yellow-400 mr-5 w-4/12 max-lg:hidden" style={{ height: "700px" }} />
      <section className="flex flex-col text-center bg-white w-7/12 max-lg:w-11/12 border-2 border-yellow-400 opacity-80">
        <div className="mx-10 pt-10">
          <h1 className="text-5xl font-bold" style={{ fontFamily: "Bruno Ace SC" }}>
            {props.name}
          </h1>
          <p className="mt-5 font-light">{props.desc}</p>
        </div>
        <section className="m-10">
          <h1 className="text-3xl font-bold" style={{ fontFamily: "Bruno Ace SC" }}>
            Information
          </h1>
          <ul className="flex flex-wrap flex-row mt-5 font-light">
            <li className="w-1/3">Age: {props.age}</li>
            <li className="w-1/3">Height: {props.height}</li>
            <li className="w-1/3">Experience: {props.experience} years</li>
          </ul>
        </section>
        <section className="m-10">
          <h1 className="text-3xl font-bold" style={{ fontFamily: "Bruno Ace SC" }}>
            Fun Facts
          </h1>
          <ul className="flex flex-wrap flex-row mt-5 font-light">
            <li className="w-1/3">{props.fact1}</li>
            <li className="w-1/3">{props.fact2}</li>
            <li className="w-1/3">{props.fact3}</li>
          </ul>
        </section>
      </section>
    </div>
  );
};

export default TrainerInfo;
