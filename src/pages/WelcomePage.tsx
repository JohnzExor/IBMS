import { useState } from "react";
import { Link } from "react-router-dom";
import img from "@/assets/images/welcomePage1.svg";

import img2 from "@/assets/images/welcomePage2.svg";
import { ModeToggle } from "@/components/theme/mode-toggle";

const WelcomePage = () => {
  const [page, setPage] = useState(0);
  return (
    <div className="w-full">
      <div className=" fixed flex justify-end  w-full p-4">
        <ModeToggle />
      </div>
      <div className=" h-screen fixed w-full flex items-end -z-10">
        <div className=" bg-gradient-to-t from-red-100 dark:from-transparent h-1/3 w-full"></div>
      </div>
      {page == 0 && (
        <div className="flex flex-col h-screen md:gap-8 items-center justify-center">
          <div className=" flex flex-col md:flex-row p-7 md:gap-8 items-center md:justify-center">
            <img src={img} className=" w-52 md:w-1/3" />
            <div className="flex flex-col items-center md:items-start md:w-1/2 gap-4 mt-10">
              <h1 className="font-bold text-2xl md:text-5xl">
                Welcome to The <span>IBMS!</span>
              </h1>
              <p className=" font-thin text-center">
                Behavioral Monitoring application on the go to make your
                institutional life secure and protected.
              </p>
              <div className="flex gap-4 text-white justify-center w-full">
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
          </div>
        </div>
      )}
      {page == 1 && (
        <div className="flex flex-col h-screen items-center justify-center p-7 gap-6">
          <div className=" flex flex-col md:flex-row justify-center items-center md:gap-7">
            <img src={img2} className=" w-52 md:w-1/3" />
            <div className="flex flex-col md:w-1/4">
              <div className=" md:text-5xl h-fit w-full flex justify-center md:justify-start gap-2 font-bold text-2xl mt-7">
                <h1>
                  I
                  <span className=" text-sm font-thin md:text-2xl">
                    nstitutional
                  </span>
                </h1>
                <h1>
                  B
                  <span className=" text-sm font-thin md:text-2xl">
                    ehavioral
                  </span>
                </h1>
                <h1>
                  M
                  <span className=" text-sm font-thin md:text-2xl">
                    anagement
                  </span>
                </h1>
                <h1>
                  S<span className=" text-sm font-thin md:text-2xl">ystem</span>
                </h1>
              </div>
              <div className="flex flex-col items-center">
                <h1 className=" font-medium w-full mt-3">About us</h1>
                <p className="font-thin">
                  Introducing our app for a positive work environment. Report
                  issues anonymously, cross-referenced with evidence. Fostering
                  healthy relationships, enhancing productivity. Say goodbye to
                  workplace unrest. Hello to harmony.
                </p>
                <div className=" flex gap-4 text-white my-5">
                  <Link to={"/auth/login"}>
                    <button className=" font-semibold  bg-nextColor dark:bg-opacity-50 rounded-xl h-12 w-32 shadow-xl">
                      Next
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
