import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaBarsProgress } from "react-icons/fa6";
import { AiOutlineLogout } from "react-icons/ai";

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
import { Button } from "./ui/button";
import { useFirebaseServices } from "@/store/useFirebase";
import { ModeToggle } from "./theme/mode-toggle";

const Header = () => {
  const { userLogout } = useFirebaseServices();
  return (
    <div className="fixed flex gap-1 bg-gradient-to-b from-skipColor dark:from-transparent w-full p-2 font-bold backdrop-blur-3xl">
      <Link
        to={"/"}
        className="text-white flex items-center gap-1 bg-nextColor dark:bg-slate-900 w-fit py-2 px-4 rounded-2xl"
      >
        <FaHome size={20} />
      </Link>
      <Link
        to={"/progress"}
        className="text-white flex items-center justify-center gap-1 bg-nextColor dark:bg-slate-900 w-full py-2 px-4 rounded-2xl"
      >
        <FaBarsProgress size={20} />
        Report Progress
      </Link>
      <div>
        <ModeToggle />
      </div>

      <Dialog>
        <DialogTrigger className="text-white flex items-center gap-1 bg-nextColor dark:bg-slate-900 w-fit py-2 px-4 rounded-2xl">
          <AiOutlineLogout />
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
  );
};

export default Header;
