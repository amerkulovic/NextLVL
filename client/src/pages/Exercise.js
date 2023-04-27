import { QUERY_EXERCISES } from "../utils/queries";
import { useQuery } from "@apollo/client";
import ExerciseItem from "../components/UI/ExerciseItem";

const Exercise = () => {
  const { loading, data } = useQuery(QUERY_EXERCISES);

  const exercises = data?.exercises || [];
  console.log(exercises);
  return (
    <>
      <div className="pt-40 bg-[#2C2E43]" />
      <section className="bg-gradient-to-b from-[#2C2E43] from-7% via-white via-50% to-[#2C2E43] to-98% flex flex-wrap justify-around">
        {exercises.map((exercise) => (
          <ExerciseItem title={exercise.title} muscle={exercise.muscle} description={exercise.instructions} image={exercise.imageURL} />
        ))}
      </section>
    </>
  );
};

export default Exercise;
