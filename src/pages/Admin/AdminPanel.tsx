import { auth } from "@/Firebase";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from "react-router-dom";

import AdminSideBar from "./AdminSideBar";
import AdminLinks from "./AdminLinks";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { useFirebaseServices } from "@/store/useFirebase";
import { IoLogOut } from "react-icons/io5";

const AdminPanel = () => {
  const navigate = useNavigate();
  const { userLogout } = useFirebaseServices();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user?.emailVerified) {
        navigate("/auth/welcome");
      }
    });
  }, []);

  return (
    <div className="p-3 md:p-14">
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
            <button
              onClick={() => userLogout()}
              className=" border rounded-xl bg-nextColor text-white p-2 flex items-center gap-2 dark:bg-opacity-50"
            >
              <IoLogOut size={25} />
              Logout
            </button>
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
      <div className="flex gap-10 items-start">
        <div className=" hidden md:block w-96 mt-4">
          <AdminLinks />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanel;
