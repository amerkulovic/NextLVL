import React from "react";
import Quote from "../components/UI/Quote";
import TextSection from "../components/UI/CircleText";
import homeLogo from "../images/home-logo.jpg";
import diamond from "../images/diamond-outline.svg";
import barbell from "../images/barbell-outline.svg";
import scale from "../images/scale-outline.svg";
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
        <TextSection image={barbell} text="Pump Iron and Get Stronger!" />
        <TextSection image={scale} text="Lose Weight and Feel Good!" />
        <TextSection image={diamond} text="Become The Best Version of Yourself!" />
      </section>
    </>
  );
};

export default Home;
