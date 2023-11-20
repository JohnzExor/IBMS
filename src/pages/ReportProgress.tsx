import { useFirebaseServices } from "@/store/useFirebase";
import { useEffect } from "react";

import Reports from "@/components/Reports";
import img from "@/assets/images/noReports.svg";

const ReportProgress = () => {
  const { reportProgress, getUserReportProgress } = useFirebaseServices();
  useEffect(() => {
    getUserReportProgress();
  }, []);
  return (
    <div className="flex flex-col mt-14 items-center min-h-screen p-10 w-full">
      <h1 className="font-semibold">Reports</h1>
      {reportProgress.length > 0 ? (
        reportProgress.map((data, index) => <Reports data={data} key={index} />)
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1>You dont have any reports pending</h1>
          <img src={img} className="w-80" />
        </div>
      )}
    </div>
  );
};

export default ReportProgress;
