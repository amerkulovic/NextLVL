import { useState } from "react";
import { useParams } from "react-router-dom";
import TrainerInfo from "../components/UI/TrainerInfo";
import tanktop from "../images/black-tanktop.jpg";
import hayley from "../images/hayley.jpg";
import redtop from "../images/red-tanktop.jpg";
import gordon from "../images/gordon.jpg";
import buffguy from "../images/buff-guy.jpg";
import julia from "../images/julia.jpg";

const TrainerPage = () => {
  const params = useParams();

  return (
    <>
      <div className="pt-40 bg-[#2C2E43]"></div>
      <section className="bg-gradient-to-b from-[#2C2E43] from-7% via-white via-50% to-[#2C2E43] to-98%">
        {params.name === "Hayley" && (
          <TrainerInfo
            name="Hayley"
            desc="Hayley is a highly skilled and experienced crossfit trainer at the popular gym, Next LVL. With her expertise and passion for fitness, she inspires and motivates her clients to push their limits and achieve their fitness goals. She is known for her high-intensity workouts and her ability to create personalized training plans that cater to the specific needs and abilities of each individual. Her positive energy and dedication to her clients make her a valuable asset to the Next LVL team, and her commitment to helping others become their best selves is truly admirable."
            image={hayley}
            age="28"
            height="5'4"
            experience="2"
            fact1="Competed in Olympic Gymnastics"
            fact2="Huge Cat Lover"
            fact3="Will Eat Pickles Non-Stop"
          />
        )}
        {params.name === "Jack" && (
          <TrainerInfo
            name="Jack"
            desc="Jack is an accomplished weightlifting trainer at Next LVL gym, known for his impressive strength and expertise in the field of weightlifting. He has been training individuals for years, helping them develop their strength and improve their lifting techniques. Jack has a deep understanding of the mechanics of weightlifting and is skilled at creating training plans that are tailored to each client's goals and abilities. He is passionate about weightlifting and is always eager to share his knowledge and experience with his clients. Jack's dedication and commitment to his clients are what make him one of the most sought-after trainers at Next LVL, and his impact on his clients' physical and mental wellbeing is immeasurable."
            image={tanktop}
            age="25"
            height="5'9"
            experience="3"
            fact1="Loves Naruto Shippuden"
            fact2="Grew Up on a Farm"
            fact3="Doesnt Like Ice Cream"
          />
        )}
        {params.name === "Dominic" && (
          <TrainerInfo
            name="Dominic"
            desc="Dominic is a highly skilled powerlifting trainer at Next LVL gym, with a wealth of knowledge and experience in the field. He has a passion for helping his clients achieve their fitness goals, and he is known for his innovative training techniques and ability to push his clients to their limits. Dominic understands the importance of proper form and technique in powerlifting, and he takes great care to ensure that his clients are lifting safely and effectively. His personalized training plans are designed to help his clients build strength, increase their endurance, and achieve their powerlifting goals. His commitment to his clients' success and his ability to motivate and inspire them are what make him a valuable member of the Next LVL team."
            image={buffguy}
            age="34"
            height="6'2"
            experience="7"
            fact1="Competed in Body Building"
            fact2="Loves Watching Horror Movies"
            fact3="Ate Chicken for 4 Years Straight"
          />
        )}
        {params.name === "Julia" && (
          <TrainerInfo
            name="Julia"
            desc="Julia is a skilled yoga trainer at Next LVL gym, with a deep understanding of the practice and its benefits. She has a calm and nurturing presence that puts her clients at ease, creating a welcoming environment for all levels of experience. Julia specializes in a variety of yoga styles, including Hatha, Vinyasa, and Restorative, and she tailors her classes to the specific needs and goals of her clients. Her focus on proper alignment and breathing techniques helps her clients deepen their practice and gain a greater sense of mindfulness and self-awareness. Julia's dedication to her clients' wellbeing and her ability to create a peaceful and supportive atmosphere make her a valuable member of the Next LVL team."
            image={julia}
            age="38"
            height="5'7"
            experience="6"
            fact1="Lived in Taiwan for 3 years"
            fact2="Enjoys Hiking"
            fact3="Practices Judo"
          />
        )}
        {params.name === "Ranjeet" && (
          <TrainerInfo
            name="Ranjeet"
            desc="Ranjeet is a talented calisthenics trainer at Next LVL gym, with a passion for bodyweight exercises and functional fitness. He has a wealth of knowledge and experience in calisthenics, which he uses to help his clients achieve their fitness goals. Ranjeet believes in the power of bodyweight exercises to build strength, increase flexibility, and improve overall fitness, and he incorporates a variety of movements into his training plans, including pull-ups, push-ups, and dips. He is skilled at designing workouts that are challenging yet achievable, allowing his clients to progress at their own pace. Ranjeet's dedication to his clients' success and his ability to motivate and inspire them make him an invaluable member of the Next LVL team."
            image={redtop}
            age="30"
            height="5'8"
            experience="4"
            fact1="Born in India"
            fact2="Moved to the United States in 2007"
            fact3="Studies Computer Science"
          />
        )}
        {params.name === "Gordon" && (
          <TrainerInfo
            name="Gordon"
            desc="Gordon is a highly respected crossfit trainer at Next LVL gym, with years of experience in the fitness industry. He has a passion for helping his clients achieve their goals, and he specializes in creating customized crossfit programs tailored to their individual needs. Gordon's workouts are known for their intensity, and he pushes his clients to their limits in a safe and supportive environment. He is a firm believer in the benefits of functional fitness, and he incorporates a variety of exercises and equipment into his training plans to help his clients build strength, endurance, and flexibility. Gordon's unwavering commitment to his clients' success and his ability to motivate and inspire them make him one of the most sought-after trainers at Next LVL gym."
            image={gordon}
            age="39"
            height="6'0"
            experience="8"
            fact1="Born in Ireland"
            fact2="Loves Traveling the World"
            fact3="Enjoys Wine Tasting"
          />
        )}
      </section>
    </>
  );
};

export default TrainerPage;
