import TextSizeToggle from "@/components/TextSizeToggle";

const UserAccountSettings = () => {
  return (
    <div className=" flex flex-col items-center h-full w-full p-7 gap-4">
      <TextSizeToggle />
      <h1 className="font-semibold">Update User Credentials</h1>
      <form action="" className=" flex flex-col gap-2">
        <input
          type="text"
          placeholder="Email"
          className=" border p-2 rounded-xl"
        />
        <input
          type="text"
          placeholder="Password"
          className=" border p-2 rounded-xl"
        />
        <button className=" border p-2 bg-nextColor text-white rounded-xl">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserAccountSettings;
