import { columns } from "@/components/tables/Columns";
import { DataTable } from "@/components/tables/data-table";
import { useFirebaseServices } from "@/store/useFirebase";
import { useEffect } from "react";

const Dashboard = () => {
  const { getUsersReport, adminDashboardData } = useFirebaseServices();
  useEffect(() => {
    getUsersReport();
  }, []);

  return <DataTable columns={columns} data={adminDashboardData} />;
};

export default Dashboard;
