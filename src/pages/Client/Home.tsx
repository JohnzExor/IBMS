import { auth } from "@/Firebase";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
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
    <>
      <Header />
      <div className="flex flex-col items-center h-screen px-6">
        <div className="flex md:w-4/5 min-h-screen pt-20 w-full">
          <div className=" hidden md:block h-5/6 border-r pr-4 ">
            <SideBar />
          </div>
          <div className="md:h-4/5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
