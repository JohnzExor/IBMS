import { Suspense, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { useFirebaseServices } from "@/store/useFirebase";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/Firebase";
import AdminHeader from "./AdminHeader";
import Footer from "@/components/Footer";

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
    <div className="flex flex-col h-screen">
      <AdminHeader />
      <div className=" p-3 md:px-10 flex flex-col items-center">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPanel;
