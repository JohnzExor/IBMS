import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Input } from "@/components/ui/input";
import { FaUserPlus } from "react-icons/fa";
import { useFirebaseServices } from "@/store/useFirebase";
import { useEffect, useState } from "react";
import { DataTable } from "@/components/tables/data-table";
import { usersColumns } from "@/components/tables/UsersColumns";

const ManageUsers = () => {
  const { addNewUser, usersData, getUsersData } = useFirebaseServices();
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUsersData();
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      addNewUser(email).then(() => setEmail(""));
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger className="text-white flex items-center gap-2 bg-nextColor dark:bg-nextColor dark:bg-opacity-50 w-fit py-2 px-4 rounded-2xl">
          <FaUserPlus size={25} />
          <span className="hidden md:block">Add User</span>
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

      <DataTable columns={usersColumns} data={usersData} />
    </div>
  );
};

export default ManageUsers;
