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
import { cancelBTN, normalBTNLong } from "@/styles/style";
import { toast } from "@/components/ui/use-toast";
import { useFirebaseServices } from "@/store/useFirebase";
import { useState } from "react";

type Props = {
  text: string;
};

const UpdatePassword = ({ text }: Props) => {
  const { updateUserPassword } = useFirebaseServices();

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPass === confirmNewPass && newPass != "" && confirmNewPass != "") {
      setIsLoading(true);
      updateUserPassword(oldPass, newPass).then(() => {
        setIsLoading(false);
        setOldPass("");
        setNewPass("");
        setConfirmNewPass("");
      });
    } else {
      toast({
        description: "Password dont match/Fill all the required fields",
      });
    }
  };
  return (
    <Dialog>
      <DialogTrigger className="border p-2 text-start rounded-md shadow-md font-semibold hover:bg-skipColor hover:bg-opacity-50 duration-500 dark:hover:bg-opacity-25">
        Update Password <br />
        <span className="font-normal">{text}</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update your password</DialogTitle>
          <DialogDescription>
            Update your password for more secure data
          </DialogDescription>
          <form onSubmit={handleSubmit} className=" space-y-2">
            <Input
              type="password"
              placeholder="Old Password"
              value={oldPass}
              onChange={(e) => setOldPass(e.target.value)}
            />
            <hr />
            <Input
              type="password"
              placeholder="New Password"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              value={confirmNewPass}
              onChange={(e) => setConfirmNewPass(e.target.value)}
            />
            <div className="flex gap-2 pt-4">
              <DialogClose className={cancelBTN}>Close</DialogClose>
              <Button className={normalBTNLong} disabled={isLoading}>
                Submit
              </Button>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UpdatePassword;
