import { auth } from "@/Firebase";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthPageContainer = () => {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });
  }, []);
  return (
    <div>
      <div className=" fixed flex justify-end w-full  p-4">
        <ModeToggle />
      </div>
      <div className=" h-screen flex flex-col  items-center justify-center w-full py-10">
        <div className=" h-screen fixed w-full flex items-end -z-10">
          <div className=" bg-gradient-to-t from-red-100 dark:from-transparent h-1/3 w-full"></div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthPageContainer;
