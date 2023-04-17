import React from "react";
import homeLogo from "../images/home-logo.jpg";
import { useQuery } from "@apollo/client";
import { QUERY_PROFILES } from "../utils/queries";

const Home = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
    <>
      <img src={homeLogo} />
    </>
  );
};

export default Home;
