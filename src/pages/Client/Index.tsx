import { auth } from "@/Firebase";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
    <div className="flex flex-col h-screen ">
      <Header />
      <div className="md:flex flex-col md:flex-row gap-8 w-full md:pt-10 justify-center items-start px-3">
        <div className="hidden md:block max-w-xs md:border-r-2 md:rounded-xl md:p-4 md:shadow-md">
          <SideBar />
        </div>
        <div className=" max-w-4xl w-full">
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
