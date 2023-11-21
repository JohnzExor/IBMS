import { auth } from "@/Firebase";
import Header from "@/components/Header";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/auth/welcome");
      }
    });
  }, []);
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="h-screen fixed w-full flex items-end -z-10">
          <div className=" bg-gradient-to-t from-red-100 dark:from-transparent h-1/3 w-full"></div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
