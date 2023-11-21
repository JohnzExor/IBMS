import { useState } from "react";
import { Link } from "react-router-dom";
import img from "@/assets/images/welcomePage1.svg";

import img2 from "@/assets/images/welcomePage2.svg";

const WelcomePage = () => {
  const [page, setPage] = useState(0);
  return (
    <div>
      <div className=" h-screen fixed w-full flex items-end -z-10">
        <div className=" bg-gradient-to-t from-red-100 dark:from-transparent h-1/3 w-full"></div>
      </div>
      {page == 0 && (
        <div className="flex flex-col h-screen items-center justify-center">
          <div className=" flex flex-col items-center">
            <img src={img} className=" w-52" />
            <h1 className="text-2xl font-bold flex flex-col items-center mt-1">
              Welcome to The <span>IBMS!</span>
            </h1>
            <p className=" mx-8 mt-3 font-thin text-center">
              Behavioral Monitoring application on the go to make your
              institutional life secure and protected.
            </p>
          </div>

          <div className=" flex gap-4 mt-10 text-white">
            <Link to={"/auth/login"}>
              <button className=" font-semibold  bg-skipColor dark:bg-opacity-50 rounded-xl h-12 w-32 shadow-xl">
                Skip
              </button>
            </Link>

            <button
              onClick={() => setPage(1)}
              className=" font-semibold  bg-nextColor dark:bg-opacity-50 rounded-xl h-12 w-32 shadow-xl"
            >
              Next
            </button>
          </div>
        </div>
      )}
      {page == 1 && (
        <div className="flex flex-col h-screen items-center justify-center p-7 gap-6">
          <div className=" flex flex-col items-center">
            <img src={img2} className=" w-52" />
            <div className=" h-fit w-full flex justify-center gap-2 font-bold text-2xl mt-7">
              <h1>
                I<span className=" text-sm font-thin">nstitutional</span>
              </h1>
              <h1>
                B<span className=" text-sm font-thin">ehavioral</span>
              </h1>
              <h1>
                M<span className=" text-sm font-thin">anagement</span>
              </h1>
              <h1>
                S<span className=" text-sm font-thin">ystem</span>
              </h1>
            </div>
            <h1 className=" font-medium w-full mt-3">About us</h1>
            <p className="font-thin">
              Introducing our app for a positive work environment. Report issues
              anonymously, cross-referenced with evidence. Fostering healthy
              relationships, enhancing productivity. Say goodbye to workplace
              unrest. Hello to harmony.
            </p>
          </div>

          <div className=" flex gap-4 text-white">
            <Link to={"/auth/login"}>
              <button className=" font-semibold  bg-nextColor dark:bg-opacity-50 rounded-xl h-12 w-32 shadow-xl">
                Next
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
