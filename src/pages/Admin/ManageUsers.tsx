import { useFirebaseServices } from "@/store/useFirebase";
import { useEffect } from "react";
import { DataTable } from "@/components/tables/data-table";
import { usersColumns } from "@/components/tables/UsersColumns";

const ManageUsers = () => {
  const { usersData, getUsersData } = useFirebaseServices();

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div className="w-full">
      <DataTable columns={usersColumns} data={usersData} />
    </div>
  );
};

export default ManageUsers;
