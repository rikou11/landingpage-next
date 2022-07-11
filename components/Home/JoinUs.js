const JoinUs = () => {
  return (
    <div className="bg-slate-50">
      <div className="px-2 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-4  ">
        <h1 className="text-center text-4xl font-bold my-4">
          Join Our Newsletter
        </h1>
        <p className=" text-slate-400 text-center mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          soluta consectetur vitae.
        </p>

        <div className="flex justify-center">
          <input
            type="email"
            className="py-2 pl-2 w-80 rounded-tl-lg rounded-bl-lg border border-r-0 border-slate-300  focus:outline-none focus:border-red-300 focus:ring-red-300 focus:ring-1  transition-all duration-150"
            placeholder="Your email here"
          />
          <button className="  lg:text-xl  py-2 px-4 rounded-tr-lg rounded-br-lg text-red-700 border border-red-700 bg-red-100 hover:bg-red-300 transition-all duration-150">
            Submit{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
