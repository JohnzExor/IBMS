import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaBarsProgress } from "react-icons/fa6";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaBarsStaggered } from "react-icons/fa6";
import SideBar from "./SideBar";
import { ModeToggle } from "./theme/mode-toggle";
import LogoutBtn from "./LogoutBtn";
import { normalBTN } from "@/styles/style";

const Header = () => {
  return (
    <div className="w-full flex justify-center p-4 bg-gradient-to-b from-skipColor dark:from-transparent">
      <div className="flex gap-1 justify-center">
        <Link to={"/"} className={normalBTN}>
          <FaHome size={20} />
          Home
        </Link>
        <Link to={"/progress"} className={normalBTN}>
          <FaBarsProgress size={20} />
          Report Progress
        </Link>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className={normalBTN}>
              <FaBarsStaggered size={25} />
            </SheetTrigger>
            <SheetContent>
              <SideBar />
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:flex items-center gap-1">
          <ModeToggle />
          <LogoutBtn />
        </div>
      </div>
    </div>
  );
};

export default Header;
