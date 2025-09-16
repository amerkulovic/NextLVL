import { useParams } from "react-router-dom";
import TrainerInfo from "../components/UI/TrainerInfo";

import tanktop from "../images/black-tanktop.jpg";
import hayley from "../images/hayley.jpg";
import redtop from "../images/red-tanktop.jpg";
import gordon from "../images/gordon.jpg";
import buffguy from "../images/buff-guy.jpg";
import julia from "../images/julia.jpg";

const trainers = {
  Hayley: {
    name: "Hayley",
    desc: "Hayley is a highly skilled and experienced crossfit trainer at the popular gym, Next LVL. With her expertise and passion for fitness, she inspires and motivates her clients...",
    image: hayley,
    age: "28",
    height: "5'4",
    experience: "2",
    fact1: "Competed in Olympic Gymnastics",
    fact2: "Huge Cat Lover",
    fact3: "Will Eat Pickles Non-Stop",
  },
  Jack: {
    name: "Jack",
    desc: "Jack is an accomplished weightlifting trainer at Next LVL gym, known for his impressive strength and expertise...",
    image: tanktop,
    age: "25",
    height: "5'9",
    experience: "3",
    fact1: "Loves Naruto Shippuden",
    fact2: "Grew Up on a Farm",
    fact3: "Doesnt Like Ice Cream",
  },
  Dominic: {
    name: "Dominic",
    desc: "Dominic is a highly skilled powerlifting trainer at Next LVL gym, with a wealth of knowledge and experience...",
    image: buffguy,
    age: "34",
    height: "6'2",
    experience: "7",
    fact1: "Competed in Body Building",
    fact2: "Loves Watching Horror Movies",
    fact3: "Ate Chicken for 4 Years Straight",
  },
  Julia: {
    name: "Julia",
    desc: "Julia is a skilled yoga trainer at Next LVL gym, with a deep understanding of the practice and its benefits...",
    image: julia,
    age: "38",
    height: "5'7",
    experience: "6",
    fact1: "Lived in Taiwan for 3 years",
    fact2: "Enjoys Hiking",
    fact3: "Practices Judo",
  },
  Ranjeet: {
    name: "Ranjeet",
    desc: "Ranjeet is a talented calisthenics trainer at Next LVL gym, with a passion for bodyweight exercises...",
    image: redtop,
    age: "30",
    height: "5'8",
    experience: "4",
    fact1: "Born in India",
    fact2: "Moved to the United States in 2007",
    fact3: "Studies Computer Science",
  },
  Gordon: {
    name: "Gordon",
    desc: "Gordon is a highly respected crossfit trainer at Next LVL gym, with years of experience in the fitness industry...",
    image: gordon,
    age: "39",
    height: "6'0",
    experience: "8",
    fact1: "Born in Ireland",
    fact2: "Loves Traveling the World",
    fact3: "Enjoys Wine Tasting",
  },
};

const TrainerPage = () => {
  const { name } = useParams();
  const trainer = trainers[name];

  return (
    <>
      <div className="pt-40 bg-[#2C2E43]" />
      <section className="bg-gradient-to-b from-[#2C2E43] from-7% via-white via-50% to-[#2C2E43] to-98%">{trainer ? <TrainerInfo {...trainer} /> : <p className="text-center text-white py-20">Trainer not found.</p>}</section>
    </>
  );
};

export default TrainerPage;
