import TextSizeToggle from "@/components/TextSizeToggle";
import UpdatePassword from "@/components/UpdatePassword";

import { useFirebaseServices } from "@/store/useFirebase";
import { Link } from "react-router-dom";

const UserAccountSettings = () => {
  const { currentUser } = useFirebaseServices();

  return (
    <div className=" flex flex-col h-full w-full md:p-7 gap-2">
      {currentUser[0].isSuperUser === 1 ? (
        <Link
          to={"/admin/"}
          className=" font-semibold border p-2 rounded-md shadow-md hover:bg-skipColor hover:bg-opacity-50 duration-500 dark:hover:bg-opacity-25"
        >
          Go to Admin Dashboard <br />
          <span className=" font-normal">
            It appears that you have administrative privileges. Please click
            here to access the admin dashboard.
          </span>
        </Link>
      ) : null}
      <TextSizeToggle />
      <UpdatePassword
        text="Please proceed to enhance the security of your account by updating
          your password. It is advisable to regularly refresh your password to
          ensure the ongoing protection of your account information. Kindly take
          a moment to set a new, strong password in order to strengthen the
          overall security measures associated with your account."
      />
    </div>
  );
};

export default UserAccountSettings;
