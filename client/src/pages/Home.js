import Quote from "../components/UI/Quote";
import CircleText from "../components/UI/CircleText";
import homeLogo from "../images/arnold-pose.jpeg";
import stretching from "../images/women-stretching.jpg";
import weights from "../images/weights.jpg";
import lifting from "../images/man-lifting.jpg";

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-black via-black to-yellow-400 overflow-hidden">
        <img className="opacity-50" style={{ height: "700px", width: "100%" }} src={homeLogo} />
      </div>
      <Quote text="It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable." author="Socrates" />
      <section className="flex flex-row flex-wrap justify-around bg-gradient-to-b from-white from-0% via-[#adafc5] via-40%  to-[#2C2E43] to-70% py-10">
        <CircleText image={weights} text="Pump Iron and Get Stronger!" />
        <CircleText image={stretching} text="Lose Weight and Feel Good!" />
        <CircleText image={lifting} text="Become The Best Version of Yourself!" />
      </section>
    </>
  );
};

export default Home;
