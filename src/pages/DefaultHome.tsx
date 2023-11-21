import img from "@/assets/images/home.svg";
import { Link } from "react-router-dom";
import { BiSolidReport } from "react-icons/bi";

const DefaultHome = () => {
  return (
    <div className="flex flex-col justify-center h-screen -mt-20 md:-mt-32 items-center gap-4 md:flex-row">
      <img src={img} className="w-80 md:w-1/3" />
      <div className="md:w-1/4 flex flex-col items gap-4">
        <h1 className=" text-4xl font-semibold">Home</h1>
        <p className="font-thin">
          Behavioral Monitoring application on the go to make your institutional
          life secure and protected.
        </p>
        <div className=" flex items-center justify-center w-full">
          <Link to={"/report"} className=" text-white">
            <button className=" font-semibold flex items-center justify-center bg-nextColor dark:bg-opacity-50 rounded-xl h-12 px-4 shadow-xl">
              <BiSolidReport size={35} />
              Report
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DefaultHome;
