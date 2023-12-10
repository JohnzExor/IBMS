import LogoutBtn from "@/components/LogoutBtn";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { GrUserManager } from "react-icons/gr";
import { IoChevronBack } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { Link } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";

const AdminSideBar = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <span className="text-xl md:hidden">
        <span className="font-semibold">IBMS </span>Admin
      </span>
      <div className="font-semibold flex-col flex gap-2">
        <Link
          to={"/admin"}
          className="flex items-center gap-2 border p-2 rounded-md"
        >
          <AiOutlineHome size={35} />
          Home
        </Link>
        <Link
          to={"/admin/reports"}
          className="flex items-center gap-2 border p-2 rounded-md"
        >
          <TbReportSearch size={35} />
          Reports
        </Link>
        <Link
          to={"/admin/manageusers"}
          className="flex items-center gap-2 border p-2 rounded-md"
        >
          <GrUserManager size={30} />
          Manage Users
        </Link>
        <Link
          to={"/"}
          className="flex items-center gap-2 border p-2 rounded-md"
        >
          <IoChevronBack size={35} />
          Go back to main website
        </Link>
      </div>
      <div className="flex gap-2 justify-center">
        <ModeToggle />
        <LogoutBtn />
      </div>
    </div>
  );
};

export default AdminSideBar;
