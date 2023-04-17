import React from "react";
import Quote from "../components/Quote";
import homeLogo from "../images/home-logo.jpg";
import { useQuery } from "@apollo/client";
import { QUERY_PROFILES } from "../utils/queries";

const Home = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
    <>
      <img style={{ height: "700px", width: "100%" }} src={homeLogo} />
      <Quote text="It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable." author="Socrates" />
    </>
  );
};

export default Home;
