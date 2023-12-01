import { Link } from "react-router-dom";

const AdminLinks = () => {
  return (
    <div className="flex flex-col justify-center md:text-right gap-2 w-full">
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
  );
};

export default AdminLinks;
