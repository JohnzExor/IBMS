import { auth } from "@/Firebase";
import { Link } from "react-router-dom";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { ModeToggle } from "./theme/mode-toggle";
import LogoutBtn from "./LogoutBtn";
import UpdatePassword from "./UpdatePassword";
import { useFirebaseServices } from "@/store/useFirebase";

const SideBar = () => {
  const { currentUser } = useFirebaseServices();
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
      <div className="mt-4 ">
        {currentUser.length > 0 && currentUser[0].password === "123456" ? (
          <UpdatePassword
            text="It appears that your current password is set to the default. 
          It is strongly recommended that you change your password for security reasons."
          />
        ) : null}
      </div>

      <div className="flex flex-col gap-2 mt-auto ml-auto md:hidden">
        <LogoutBtn />
      </div>
    </div>
  );
};

export default SideBar;
