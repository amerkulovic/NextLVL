import { QUERY_EXERCISES } from "../utils/queries";
import { useQuery } from "@apollo/client";

const Exercise = () => {
  const { loading, data } = useQuery(QUERY_EXERCISES);

  const exercises = data?.exercises || [];
  console.log(exercises);
  return (
    <>
      <div className="pt-40 bg-[#2C2E43]" />
      <section className="bg-gradient-to-b from-[#2C2E43] from-7% via-white via-50% to-[#2C2E43] to-98%">
        {exercises.map((exercise) => (
          <div className="py-4">
            <h1>{exercise.title}</h1>
            <img className="h-10 w-10" src={exercise.imageURL} />
          </div>
        ))}
      </section>
    </>
  );
};

export default Exercise;
