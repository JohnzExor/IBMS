import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useFirebaseServices } from "@/store/useFirebase";
import { DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";

import { FaUserPlus } from "react-icons/fa";

const AddUsers = () => {
  const { addNewUser } = useFirebaseServices();

  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      addNewUser(email).then(() => setEmail(""));
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-1 rounded-md border p-2 border-nextColor text-nextColor font-semibold">
        <FaUserPlus size={25} />
        Add User
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
          <h1 className="font-semibold">Add new User</h1>
          <Input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex items-center gap-2">
            <DialogClose className="text-white flex  items-center gap-1 bg-skipColor dark:bg-opacity-50 w-fit py-2 px-4 rounded-2xl">
              Close
            </DialogClose>

            <button
              type="submit"
              className="text-white flex  items-center justify-center gap-1 bg-nextColor dark:bg-opacity-50 w-full py-2 px-4 rounded-2xl"
            >
              Submit
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddUsers;
