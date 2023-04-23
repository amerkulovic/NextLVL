const Quote = (props) => {
  return (
    <>
      <section className="bg-[#2C2E43] text-[#FFD523] text-3xl flex justify-center py-14">
        <div className="flex flex-col items-center m-5">
          <h1 className="font-extralight pb-4">"{props.text}"</h1>
          <h2 className="font-bold">-{props.author}</h2>
        </div>
      </section>
    </>
  );
};

export default Quote;
