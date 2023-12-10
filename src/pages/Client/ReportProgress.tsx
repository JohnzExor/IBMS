import { useFirebaseServices } from "@/store/useFirebase";
import { useEffect } from "react";

import Reports from "@/components/Reports";
import img from "@/assets/images/noReports.svg";

import img2 from "@/assets/images/progressPAge.svg";

const ReportProgress = () => {
  const { reportProgress, getUserReportProgress } = useFirebaseServices();
  useEffect(() => {
    getUserReportProgress();
  }, []);
  return (
    <div className="flex flex-col md:flex-row items-start gap-4">
      <img src={img2} className="md:w-1/3 md:hidden" />
      <div className="flex flex-col items-center md:w-1/2 md:overflow-y-auto md:h-[700px] md:px-4">
        <h1 className="font-semibold text-2xl w-full text-left">Reports</h1>
        {reportProgress.length > 0 ? (
          reportProgress.map((data, index) => (
            <Reports data={data} key={index} />
          ))
        ) : (
          <div className="flex flex-col items-center gap-8 justify-center mt-14">
            <h1>You dont have any reports pending</h1>
            <img src={img} className="md:w-1/2 w-1/3" />
          </div>
        )}
      </div>
      <img src={img2} className="md:w-1/3 hidden md:block" />
    </div>
  );
};

export default ReportProgress;
