import SquareText from "../components/UI/SquareText";
import homeImage from "../images/home-logo.jpg";

const About = () => {
  return (
    <>
      <div className="pt-40 bg-[#2C2E43]"></div>
      <section className="flex flex-col items-center pt-10 justify-between">
        <SquareText isImageLeft={true} header="Who Are We?" text="Next LVL is a premier gym that is dedicated to helping individuals achieve their fitness goals and take their training to the next level. Our state-of-the-art facility is designed to provide our members with the latest and most effective fitness equipment, expert training programs, and a motivating atmosphere to help them push themselves to their limits. Whether you're looking to build muscle, lose weight, or simply get in shape, our team of experienced trainers and fitness experts are here to guide and support you every step of the way. At Next LVL, we believe that fitness is not just a goal, but a way of life. Join us today and take the first step towards achieving your fitness goals and unlocking your full potential." image={homeImage} />
        <SquareText isImageLeft={false} header="How Can We Help You?" text="At Next LVL, our expert trainers and cutting-edge equipment provide a wide range of training benefits to help our members achieve their fitness goals. Our customized training programs include strength training, cardio workouts, functional training, and more, all aimed at improving overall fitness and building a strong, healthy body. In addition to physical benefits, training at Next LVL also provides mental and emotional benefits, with a supportive community of like-minded individuals and a range of wellness programs. We believe that mental health is just as important as physical health, and our trainers are equipped to provide support and guidance in both areas. Join us today and take your training to the next level!" image={homeImage} />
      </section>
    </>
  );
};

export default About;
