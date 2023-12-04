import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import AdminLinks from "./AdminLinks";
import { useFirebaseServices } from "@/store/useFirebase";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/Firebase";
import AdminHeader from "./AdminHeader";

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
      <AdminHeader />
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
