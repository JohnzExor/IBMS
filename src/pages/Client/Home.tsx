import img from "@/assets/images/home.svg";
import { Link } from "react-router-dom";
import { BiSolidReport } from "react-icons/bi";

const DefaultHome = () => {
  return (
    <div className="flex flex-col items-center md:flex-row gap-10">
      <img src={img} className="w-80 md:w-1/3 md:hidden" />
      <div className="flex flex-col gap-4">
        <h1 className=" text-4xl font-semibold">Home</h1>
        <p className="font-thin">
          Behavioral Monitoring application on the go to make your institutional
          life secure and protected.
        </p>
        <div className=" flex items-center justify-center w-full">
          <Link
            to={"/report"}
            className="text-white w-full bg-nextColor dark:bg-opacity-50 rounded-xl p-2 shadow-xl hover:bg-transparent border hover:border-nextColor hover:bg-gradient-to-l duration-500 ease-in-out from-nextColor"
          >
            <button className=" text-center font-semibold flex items-center text-2xl justify-center w-full">
              <BiSolidReport size={35} />
              Report
            </button>
          </Link>
        </div>
      </div>
      <img src={img} className="md:w-1/2 hidden md:block" />
    </div>
  );
};

export default DefaultHome;
