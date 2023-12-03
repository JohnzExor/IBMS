import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from "react-router-dom";

import AdminSideBar from "./AdminSideBar";
import AdminLinks from "./AdminLinks";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { useFirebaseServices } from "@/store/useFirebase";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/Firebase";
import LogoutBtn from "@/components/LogoutBtn";

const AdminPanel = () => {
  const navigate = useNavigate();
  const { currentUser } = useFirebaseServices();

  useEffect(() => {
    onAuthStateChanged(auth, () => {
      if (!currentUser.some((data) => data.isSuperUser === 1)) {
        navigate("/");
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
