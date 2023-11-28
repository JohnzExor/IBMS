import { auth } from "@/Firebase";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import { useFirebaseServices } from "@/store/useFirebase";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

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
import { FaUserPlus } from "react-icons/fa";
import { Input } from "@/components/ui/input";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const { userLogout, addNewUser } = useFirebaseServices();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user?.emailVerified) {
        navigate("/auth/welcome");
      }
    });
  }, []);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      addNewUser(email).then(() => setEmail(""));
    }
  };
  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to={"/"} className=" cursor-pointer font-semibold">
            <label>IBMS ADMIN</label>
          </Link>

          <Dialog>
            <DialogTrigger className="text-white flex items-center gap-2 bg-nextColor dark:bg-slate-900 w-fit py-2 px-4 rounded-2xl">
              <FaUserPlus size={25} />
              <span className="hidden md:block">Add User</span>
            </DialogTrigger>
            <DialogContent>
              <form onSubmit={onSubmit} className="flex flex-col gap-3">
                <h1>Add new User</h1>
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
        </div>

        <div className=" flex items-center gap-2">
          <ModeToggle />
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

      <Outlet />
    </div>
  );
};

export default AdminPanel;
