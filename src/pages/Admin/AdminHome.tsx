import admin from "@/assets/images/admin.svg";
import AdminLinks from "./AdminLinks";

const AdminHome = () => {
  return (
    <div className="w-full">
      <img src={admin} alt="admin" className=" md:ml-40 md:w-1/3 md:absolute" />
      <div className=" md:hidden my-4">
        <AdminLinks />
      </div>
    </div>
  );
};

export default AdminHome;
