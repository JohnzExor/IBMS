import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AdminDropDown from "@/components/AdminDropdown";
import { IoIosArrowDown } from "react-icons/io";
const AdminHeader = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className=" flex items-center justify-between md:justify-center gap-4 w-full p-4">
        <Link
          to={"/admin/"}
          className="cursor-pointer font-semibold text-xl md:text-2xl"
        >
          <label>
            IBMS <span className="font-normal">Admin</span>
          </label>
        </Link>
        <div className="hidden md:flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center gap-2 border rounded-xl p-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="font-medium">Options</span>
                <IoIosArrowDown />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <AdminDropDown />
            </DropdownMenuContent>
          </DropdownMenu>
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
