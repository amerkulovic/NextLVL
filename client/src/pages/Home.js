import React from "react";
import Quote from "../components/UI/Quote";
import CircleText from "../components/UI/CircleText";
import homeLogo from "../images/arnold-pose.jpeg";
import stretching from "../images/women-stretching.jpg";
import weights from "../images/weights.jpg";
import lifting from "../images/man-lifting.jpg";
// import { useQuery } from "@apollo/client";
// import { QUERY_PROFILES } from "../utils/queries";

const Home = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
    <>
      <img style={{ height: "700px", width: "100%" }} src={homeLogo} />
      <Quote text="It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable." author="Socrates" />
      <section className="flex flex-row flex-wrap justify-around bg-[#595260] py-10">
        <CircleText image={weights} text="Pump Iron and Get Stronger!" />
        <CircleText image={stretching} text="Lose Weight and Feel Good!" />
        <CircleText image={lifting} text="Become The Best Version of Yourself!" />
      </section>
    </>
  );
};

export default Home;
