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
import { cancelBTN, normalBTN, normalBTNLong } from "@/styles/style";
import { MdKeyboardArrowLeft } from "react-icons/md";

const LogoutBtn = () => {
  const { userLogout } = useFirebaseServices();
  return (
    <Dialog>
      <DialogTrigger className={normalBTN}>
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
        <DialogFooter className=" flex flex-row gap-1 md:gap-0">
          <DialogClose asChild>
            <Button type="button" className={cancelBTN}>
              <MdKeyboardArrowLeft size={30} />
            </Button>
          </DialogClose>
          <Button onClick={() => userLogout()} className={normalBTNLong}>
            Logout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LogoutBtn;
