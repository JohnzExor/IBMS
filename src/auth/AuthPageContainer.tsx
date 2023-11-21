import { ModeToggle } from "@/components/theme/mode-toggle";
import { Outlet } from "react-router-dom";

const AuthPageContainer = () => {
  return (
    <div>
      <div className=" fixed flex justify-end md:justify-center w-full  p-4">
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
