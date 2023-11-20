import { Outlet } from "react-router-dom";

const AuthPageContainer = () => {
  return (
    <div className=" h-screen flex flex-col justify-center items-center w-full py-10">
      <div className=" h-screen fixed w-full flex items-end -z-10">
        <div className=" bg-gradient-to-t from-red-100 dark:from-transparent h-1/3 w-full"></div>
      </div>
      <Outlet />
    </div>
  );
};

export default AuthPageContainer;
