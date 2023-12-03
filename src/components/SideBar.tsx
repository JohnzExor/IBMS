import { auth } from "@/Firebase";
import { Link } from "react-router-dom";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { ModeToggle } from "./theme/mode-toggle";
import LogoutBtn from "./LogoutBtn";

const SideBar = () => {
  return (
    <div className="flex flex-col items-center md:items-start h-full bg-gradient-to-l md:w-80">
      <div className="md:hidden">
        <ModeToggle />
      </div>
      <div>
        <h1 className="font-semibold text-xl mt-4">IBMS</h1>
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
      <div className="flex flex-col gap-2 mt-auto ml-auto md:ml-0 md:mr-auto">
        <LogoutBtn />
      </div>
    </div>
  );
};

export default SideBar;
