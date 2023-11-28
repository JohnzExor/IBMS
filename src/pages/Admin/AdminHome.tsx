import { Link } from "react-router-dom";
import admin from "@/assets/images/admin.svg";

const AdminHome = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center mt-20">
      <img src={admin} alt="admin" className="md:w-1/4" />
      <div className=" flex justify-center items-center gap-2 mt-4">
        <Link
          to={"/admin/dashboard"}
          className=" font-bold border p-4 rounded-xl bg-nextColor text-white dark:bg-opacity-50"
        >
          View all reports
        </Link>
        <Link
          to={"/admin/manageusers"}
          className=" font-bold border p-4 rounded-xl bg-nextColor text-white dark:bg-opacity-50"
        >
          Manage Users
        </Link>
      </div>
    </div>
  );
};

export default AdminHome;
