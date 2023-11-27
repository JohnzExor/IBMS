import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaBarsProgress } from "react-icons/fa6";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaBarsStaggered } from "react-icons/fa6";
import SideBar from "./SideBar";
import { ModeToggle } from "./theme/mode-toggle";

const Header = () => {
  return (
    <div className="fixed w-full flex justify-center p-4 bg-gradient-to-b from-skipColor dark:from-transparent">
      <div className="flex gap-1 justify-center md:w-1/4">
        <Link
          to={"/"}
          className="text-white flex items-center gap-1 bg-nextColor dark:bg-slate-900 w-fit py-2 px-4 rounded-2xl"
        >
          <FaHome size={20} />
          <span>Home</span>
        </Link>
        <Link
          to={"/progress"}
          className="text-white flex items-center justify-center gap-1 bg-nextColor dark:bg-slate-900 w-full py-2 px-4 rounded-2xl"
        >
          <FaBarsProgress size={20} />
          Report Progress
        </Link>
        <Sheet>
          <SheetTrigger className="bg-nextColor dark:bg-slate-900 w-fit py-2 px-4 rounded-2xl text-white md:hidden">
            <FaBarsStaggered />
          </SheetTrigger>
          <SheetContent>
            <SideBar />
          </SheetContent>
        </Sheet>
        <div className="hidden md:block">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
