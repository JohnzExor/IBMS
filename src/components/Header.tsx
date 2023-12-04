import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaBarsProgress } from "react-icons/fa6";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaBarsStaggered } from "react-icons/fa6";
import SideBar from "./SideBar";
import { ModeToggle } from "./theme/mode-toggle";
import LogoutBtn from "./LogoutBtn";

const Header = () => {
  return (
    <div className="w-full flex justify-center p-4 bg-gradient-to-b from-skipColor dark:from-transparent">
      <div className="flex gap-1 justify-center">
        <Link
          to={"/"}
          className="text-white flex items-center gap-1 bg-nextColor dark:bg-opacity-50 w-fit py-2 px-4 rounded-2xl"
        >
          <FaHome size={20} />
          Home
        </Link>
        <Link
          to={"/progress"}
          className="text-white flex items-center justify-center gap-1 bg-nextColor dark:bg-opacity-50 w-full py-2 px-4 rounded-2xl"
        >
          <FaBarsProgress size={20} />
          Report Progress
        </Link>
        <Sheet>
          <SheetTrigger className="bg-nextColor dark:bg-opacity-50 w-fit py-2 px-4 rounded-2xl text-white md:hidden">
            <FaBarsStaggered />
          </SheetTrigger>
          <SheetContent>
            <SideBar />
          </SheetContent>
        </Sheet>
        <div className="hidden md:flex items-center gap-1">
          <ModeToggle />
          <LogoutBtn />
        </div>
      </div>
    </div>
  );
};

export default Header;
