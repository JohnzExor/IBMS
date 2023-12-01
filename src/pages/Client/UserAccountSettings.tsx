import { auth } from "@/Firebase";
import TextSizeToggle from "@/components/TextSizeToggle";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const UserAccountSettings = () => {
  return (
    <div className=" flex flex-col h-full w-full md:p-7 gap-2">
      {auth.currentUser?.emailVerified && (
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
      )}
      <TextSizeToggle />
      <Dialog>
        <DialogTrigger className="border p-2 text-start rounded-md shadow-md font-semibold hover:bg-skipColor hover:bg-opacity-50 duration-500 dark:hover:bg-opacity-25">
          Update Password <br />
          <span className="font-normal">
            Please proceed to enhance the security of your account by updating
            your password. It is advisable to regularly refresh your password to
            ensure the ongoing protection of your account information. Kindly
            take a moment to set a new, strong password in order to strengthen
            the overall security measures associated with your account.
          </span>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update your password</DialogTitle>
            <DialogDescription>
              Update your password for more secure data
            </DialogDescription>
            <form action="" className=" space-y-2">
              <Input type="password" placeholder="Old Password" />
              <hr />
              <Input type="password" placeholder="New Password" />
              <Input type="password" placeholder="Confirm Password" />
              <div className="flex gap-2">
                <DialogClose className="w-1/4 bg-skipColor rounded-md text-white dark:bg-opacity-50">
                  Close
                </DialogClose>
                <Button className="w-9/12  bg-nextColor rounded-md text-white dark:bg-opacity-50">
                  Submit
                </Button>
              </div>
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserAccountSettings;
