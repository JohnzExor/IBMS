import { auth } from "@/Firebase";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { onAuthStateChanged } from "firebase/auth";
import { Suspense, useEffect } from "react";
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
        <Suspense fallback={<LoadingSkeleton />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default AuthPageContainer;
