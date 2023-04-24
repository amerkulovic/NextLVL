const Quote = (props) => {
  return (
    <>
      <section className="text-3xl flex justify-center py-14">
        <div className="flex flex-col items-center m-5">
          <h1 className="font-extralight pb-4">"{props.text}"</h1>
          <h2 className="font-bold" style={{ fontFamily: "Bruno Ace SC" }}>
            -{props.author}
          </h2>
        </div>
      </section>
    </>
  );
};

export default Quote;
