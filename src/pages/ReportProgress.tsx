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
    <div className="flex flex-col md:flex-row md:items-start items-center justify-center gap-4 md:gap-20">
      <img src={img2} className="w-80 md:w-1/3" />
      <div className="flex flex-col items-center md:w-1/3">
        <h1 className="font-semibold text-2xl w-full text-left">Reports</h1>
        {reportProgress.length > 0 ? (
          reportProgress.map((data, index) => (
            <Reports data={data} key={index} />
          ))
        ) : (
          <div className="flex flex-col items-center gap-8 justify-center mt-14">
            <h1>You dont have any reports pending</h1>
            <img src={img} className="md:w-1/2" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportProgress;
