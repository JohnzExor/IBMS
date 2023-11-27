import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { AiOutlineLogout } from "react-icons/ai";
import { Button } from "./ui/button";
import { useFirebaseServices } from "@/store/useFirebase";
import { auth } from "@/Firebase";
import { Link } from "react-router-dom";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { ModeToggle } from "./theme/mode-toggle";

const SideBar = () => {
  const { userLogout } = useFirebaseServices();

  return (
    <div className="flex flex-col items-center md:items-start h-full bg-gradient-to-l md:w-80">
      <div className="md:hidden">
        <ModeToggle />
      </div>
      <div>
        <h1 className="font-semibold text-xl mt-4">IBMS</h1>
        <p>Institutional Behavior Monitoring System</p>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <p className="font-semibold">{auth.currentUser?.email}</p>
        <Link to={"/accountsettings"}>
          <button className="flex items-center gap-2 p-2 border rounded-xl shadow-sm">
            <MdOutlineSwitchAccount size={30} />
            Account Settings
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-2 mt-auto ml-auto md:ml-0 md:mr-auto">
        <Dialog>
          <DialogTrigger className=" text-white flex items-center gap-1 bg-nextColor dark:bg-slate-900 w-fit py-2 px-4 rounded-2xl">
            <AiOutlineLogout />
            <span>Logout</span>
          </DialogTrigger>
          <DialogContent className=" w-80">
            <DialogHeader>
              <DialogTitle>Are you sure absolutely sure?</DialogTitle>
              <DialogDescription>
                You are about to be logged out from this device.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className=" flex flex-row gap-2">
              <DialogClose asChild>
                <Button
                  type="button"
                  className="text-white dark:bg-slate-900 gap-1 w-fit py-2 px-4 rounded-2xl"
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button
                onClick={() => userLogout()}
                className="text-white gap-1 bg-nextColor dark:bg-opacity-50 w-full py-2 px-4 rounded-2xl"
              >
                Logout
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default SideBar;
