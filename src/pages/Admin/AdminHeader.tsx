import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";
import { ModeToggle } from "@/components/theme/mode-toggle";
import LogoutBtn from "@/components/LogoutBtn";

const AdminHeader = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className=" flex items-center justify-between w-full p-4">
        <Link
          to={"/admin/"}
          className="cursor-pointer font-semibold text-xl md:text-4xl"
        >
          <label>
            IBMS <span className="font-normal">ADMIN</span>
          </label>
        </Link>
        <div className="hidden md:flex items-center gap-2">
          <ModeToggle />
          <LogoutBtn />
        </div>
        <Sheet>
          <SheetTrigger className="md:hidden">
            <FaBarsStaggered size={30} />
          </SheetTrigger>
          <SheetContent>
            <AdminSideBar />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default AdminHeader;
