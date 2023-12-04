import { auth } from "@/Firebase";
import { Link } from "react-router-dom";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { ModeToggle } from "./theme/mode-toggle";
import LogoutBtn from "./LogoutBtn";

const SideBar = () => {
  return (
    <div className="flex flex-col items-center md:items-start h-full bg-gradient-to-l">
      <div className="md:hidden">
        <ModeToggle />
      </div>
      <div>
        <h1 className="font-semibold text-xl md:text-3xl">IBMS</h1>
        <p>Institutional Behavior Monitoring System</p>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <p className="font-semibold">{auth.currentUser?.email}</p>
        <Link to={"/accountsettings"}>
          <button className="flex items-center gap-2 p-2 border rounded-xl shadow-sm">
            <MdOutlineSwitchAccount size={30} />
            Account Settings
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-2 mt-auto ml-auto md:hidden">
        <LogoutBtn />
      </div>
    </div>
  );
};

export default SideBar;
