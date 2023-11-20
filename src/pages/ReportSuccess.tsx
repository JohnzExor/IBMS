import { Link } from "react-router-dom";
import img from "@/assets/images/successReport.svg";

const ReportSuccess = () => {
  return (
    <div className=" flex flex-col items-center ">
      <img src={img} className="w-80" />
      <Link to={"/progress"}>
        <button className=" font-semibold  bg-nextColor dark:bg-opacity-50 rounded-xl h-12 w-32 shadow-xl text-white">
          See Progress
        </button>
      </Link>
    </div>
  );
};

export default ReportSuccess;
