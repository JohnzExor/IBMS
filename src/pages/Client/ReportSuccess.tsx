import { Link } from "react-router-dom";
import img from "@/assets/images/successReport.svg";

const ReportSuccess = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <img src={img} className="md:hidden" />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-xl font-semibold text-left w-full">
          Report Success
        </h1>
        <p>You can view your report status by clicking the button below</p>
        <Link to={"/progress"}>
          <button className=" font-semibold bg-nextColor dark:bg-opacity-50 rounded-xl h-12 w-32 shadow-xl text-white">
            See Progress
          </button>
        </Link>
      </div>
      <img src={img} className="md:w-1/2 hidden md:block" />
    </div>
  );
};

export default ReportSuccess;
