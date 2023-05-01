import { QUERY_EXERCISES } from "../utils/queries";
import { useQuery } from "@apollo/client";
import ExerciseItem from "../components/UI/ExerciseItem";
import { useState } from "react";
import "./Exercise.css";

const Exercise = () => {
  const { loading, data } = useQuery(QUERY_EXERCISES);

  const exercises = data?.exercises || [];
  let [filteredExercises, setFilteredExercises] = useState([...exercises]);

  const filterExercises = (event) => {
    const value = event.target.value;

    setFilteredExercises(exercises.filter((exercise) => exercise.muscle === value));
  };

  return (
    <>
      <div className="pt-40 bg-[#2C2E43] flex justify-end">
        <div className="flex flex-col text-center items-center mr-11 mb-2 relative">
          <button className="bg-yellow-400 py-3 px-10 relative filter-btn" style={{ fontFamily: "Bruno Ace SC" }}>
            Filter
          </button>
          <section className="bg-white px-6 pt-2 flex flex-col font-light absolute top-12 filter-options border-2 border-b-black border-x-black border-t-yellow-400">
            <button className="pt-0.5" onClick={() => setFilteredExercises([...exercises])}>
              All
            </button>
            <button value="biceps" className="py-0.5" onClick={filterExercises}>
              Biceps
            </button>
            <button value="triceps" className="py-0.5" onClick={filterExercises}>
              Triceps
            </button>
            <button value="traps" className="py-0.5" onClick={filterExercises}>
              Traps
            </button>
            <button value="quadriceps" className="py-0.5" onClick={filterExercises}>
              Quadriceps
            </button>
            <button value="hamstrings" className="py-0.5" onClick={filterExercises}>
              Hamstrings
            </button>
            <button value="glutes" className="py-0.5" onClick={filterExercises}>
              Glutes
            </button>
            <button value="calves" className="py-0.5" onClick={filterExercises}>
              Calves
            </button>
            <button value="chest" className="py-0.5" onClick={filterExercises}>
              Chest
            </button>
            <button value="lats" className="py-0.5" onClick={filterExercises}>
              Lats
            </button>
            <button value="lower_back" className="py-0.5" onClick={filterExercises}>
              Lower Back
            </button>
            <button value="middle_back" className="py-0.5" onClick={filterExercises}>
              Middle Back
            </button>
          </section>
        </div>
      </div>
      <section className="bg-gradient-to-b from-[#2C2E43] from-7% via-white via-50% to-[#2C2E43] to-98% flex flex-wrap justify-around">
        {filteredExercises.map((exercise) => (
          <ExerciseItem key={exercise.title} title={exercise.title} muscle={exercise.muscle} description={exercise.instructions} image={exercise.imageURL} />
        ))}
      </section>
    </>
  );
};

export default Exercise;
