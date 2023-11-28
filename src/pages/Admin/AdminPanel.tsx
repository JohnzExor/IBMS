import { auth } from "@/Firebase";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user?.emailVerified) {
        navigate("/auth/welcome");
      }
    });
  }, []);

  return (
    <div className="p-6">
      <div className="flex items-center justify-center gap-2">
        <div className="flex items-center gap-2">
          <Link to={"/admin/home"} className=" cursor-pointer font-semibold ">
            <label>IBMS ADMIN</label>
          </Link>
        </div>
        <ModeToggle />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanel;
