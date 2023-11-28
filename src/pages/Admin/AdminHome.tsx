import { Link } from "react-router-dom";
import admin from "@/assets/images/admin.svg";

const AdminHome = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-20 md:flex-row justify-center mt-10 md:mt-40">
      <div className="flex flex-col justify-center text-right gap-2">
        <Link
          to={"/admin/reports"}
          className=" font-medium text-2xl border p-2 rounded-md text-nextColor border-nextColor shadow-md hover:bg-gradient-to-l hover:from-nextColor hover:text-white duration-1000"
        >
          Reports
        </Link>
        <Link
          to={"/admin/manageusers"}
          className=" font-medium text-2xl border p-2 rounded-md text-nextColor border-nextColor shadow-md hover:bg-gradient-to-l hover:from-nextColor hover:text-white duration-1000"
        >
          Manage Users
        </Link>
        <Link
          to={"/"}
          className=" font-medium text-2xl border p-2 rounded-md text-nextColor border-nextColor shadow-md hover:bg-gradient-to-l hover:from-nextColor hover:text-white duration-1000"
        >
          Go back to main website
        </Link>
      </div>
      <img src={admin} alt="admin" className="md:w-1/4" />
    </div>
  );
};

export default AdminHome;
