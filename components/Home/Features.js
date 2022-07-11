import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  const featurs = [
    { name: "featurs" },
    { name: "featurs" },
    { name: "featurs" },
    { name: "featurs" },
    { name: "featurs" },
    { name: "featurs" },
    { name: "featurs" },
    { name: "featurs" },
    { name: "featurs" },
  ];
  return (
    <div className="px-2 py-3 mx-auto  bg sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-4  ">
      <h1 className="text-center text-4xl font-bold my-4">
        Here's what our customers are saying
      </h1>
      <p className=" text-slate-400 text-center ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia soluta
        consectetur vitae.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 text-center gap-10 mt-14 justify-center">
        {featurs.map((i, index) => {
          return (
            <div className="font-bold " key={index}>
              <FontAwesomeIcon className="text-red-500" icon={faStar} />{" "}
              {i.name} #{index}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
