import { auth } from "@/Firebase";
import Header from "@/components/Header";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import SideBar from "@/components/SideBar";
import { onAuthStateChanged } from "firebase/auth";
import { Suspense, useEffect } from "react";
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
      <div className="flex md:px-40 p-4 py-10 md:py-20">
        <div className="hidden md:block w-96">
          <SideBar />
        </div>
        <Suspense fallback={<LoadingSkeleton />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
