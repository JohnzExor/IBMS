import { adminBTNLinks } from "@/styles/style";
import { Link } from "react-router-dom";

const AdminLinks = () => {
  return (
    <div className="flex flex-col justify-center md:text-right gap-2 md:w-96">
      <Link to={"/admin/reports"} className={adminBTNLinks}>
        Reports
      </Link>
      <Link to={"/admin/manageusers"} className={adminBTNLinks}>
        Manage Users
      </Link>
      <Link to={"/"} className={adminBTNLinks}>
        Go back to main website
      </Link>
    </div>
  );
};

export default AdminLinks;
