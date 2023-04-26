import { useState } from "react";

const Contact = () => {
  const [nameInput, setNameInput] = useState("");
  const [nameStyling, setNameStyling] = useState("w-1/2 max-sm:w-full h-10");
  const [emailInput, setEmailInput] = useState("");
  const [emailStyling, setEmailStyling] = useState("w-1/2 max-sm:w-full h-10");

  const nameInputHandler = (event) => {
    if (nameInput.trim().length > 0) {
      setNameStyling("w-1/2 max-sm:w-full h-10");
    }
    setNameInput(event.target.value);
  };

  const emailInputHandler = (event) => {
    if (emailInput.trim().length > 0) {
      setEmailStyling("w-1/2 max-sm:w-full h-10");
    }
    setEmailInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (nameInput === "") {
      setNameStyling("w-1/2 max-sm:w-full border border-red-600 bg-red-200 h-10");
    } else {
      setNameStyling("w-1/2 max-sm:w-full h-10");
    }
    if (emailInput === "") {
      setEmailStyling("w-1/2 max-sm:w-full border border-red-600 bg-red-200 h-10");
    } else {
      setEmailStyling("w-1/2 max-sm:w-full h-10");
    }
  };
  return (
    <>
      <div className="pt-40 bg-[#2C2E43]" />
      <section className="bg-gradient-to-b from-[#2C2E43] from-7% via-white via-30% to-[#2C2E43] to-98%  py-10">
        <div className="flex flex-row justify-center">
          <div className="bg-yellow-400 flex flex-col px-10">
            <h1 className="text-5xl mt-20 font-bold" style={{ fontFamily: "Bruno Ace SC" }}>
              Contact Us
            </h1>
            <p className="py-8 font-light">
              A better future is possible.
              <br /> Contact us to learn more about our mission and work,
              <br /> or to become involved and achieve your fitness goal!
            </p>
            <ul className="pt-20 font-light">
              <li className="py-0.5">NextLVL@gmail.com</li>
              <li className="py-0.5">123 Level Up Street, Chicago IL</li>
              <li className="py-0.5">(555)-555-5555</li>
            </ul>
          </div>
          <form className="bg-yellow-400 text-center pt-20 pb-10 w-1/2 max-sm:w-full max-lg:w-3/4">
            <div className="py-3 flex flex-col justify-center items-center">
              <label className="text-black m-3 font-bold text-2xl" style={{ fontFamily: "Bruno Ace SC" }}>
                Name:
              </label>
              <input type="text" className={nameStyling} onChange={nameInputHandler} />
            </div>
            <div className="py-3 flex flex-col justify-center items-center">
              <label className="text-black m-3 font-bold text-2xl" style={{ fontFamily: "Bruno Ace SC" }}>
                Email:
              </label>
              <input type="email" className={emailStyling} onChange={emailInputHandler} />
            </div>
            <div className="py-3 flex flex-col justify-center items-center">
              <label className="text-black m-3 font-bold text-2xl" style={{ fontFamily: "Bruno Ace SC" }}>
                Message:
              </label>
              <textarea className="w-1/2 max-sm:w-full" rows="5" name="message"></textarea>
            </div>
            <button onClick={submitHandler} className="bg-black text-white px-6 py-3 text-lg mt-3 font-bold" style={{ fontFamily: "Bruno Ace SC" }}>
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
