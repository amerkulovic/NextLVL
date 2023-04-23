import SquareText from "../components/UI/SquareText";
import homeImage from "../images/home-logo.jpg";

const About = () => {
  return (
    <>
      <div className="pt-40 bg-[#2C2E43]"></div>
      <SquareText isImageLeft={true} header="First Post" text="This is my first post" image={homeImage} />
    </>
  );
};

export default About;
