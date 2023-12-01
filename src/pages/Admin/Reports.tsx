import { columns } from "@/components/tables/Columns";
import { DataTable } from "@/components/tables/data-table";
import { useFirebaseServices } from "@/store/useFirebase";
import { useEffect } from "react";

const Reports = () => {
  const { getUsersReport, adminDashboardData } = useFirebaseServices();
  useEffect(() => {
    getUsersReport();
  }, []);

  return (
    <div className="w-full">
      <DataTable columns={columns} data={adminDashboardData} />
    </div>
  );
};

export default Reports;
