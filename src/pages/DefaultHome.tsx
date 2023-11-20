import img from "@/assets/images/home.svg";
import { Link } from "react-router-dom";

const DefaultHome = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={img} className="w-80" />
      <p className=" mx-8 -mt-8 font-thin text-center">
        Behavioral Monitoring application on the go to make your institutional
        life secure and protected.
      </p>
      <Link to={"/report"} className="mt-6 text-white">
        <button className=" font-semibold  bg-nextColor dark:bg-opacity-50 rounded-xl h-12 w-32 shadow-xl">
          Report
        </button>
      </Link>
    </div>
  );
};

export default DefaultHome;
