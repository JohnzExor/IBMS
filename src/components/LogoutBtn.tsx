import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AiOutlineLogout } from "react-icons/ai";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import { useFirebaseServices } from "@/store/useFirebase";

const LogoutBtn = () => {
  const { userLogout } = useFirebaseServices();
  return (
    <Dialog>
      <DialogTrigger className=" text-white flex items-center gap-1 bg-nextColor dark:bg-opacity-50 w-fit py-2 px-4 rounded-2xl">
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
  );
};

export default LogoutBtn;
