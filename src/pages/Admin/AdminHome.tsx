import admin from "@/assets/images/admin.svg";
import AdminLinks from "./AdminLinks";

const AdminHome = () => {
  return (
    <div className=" flex flex-col md:flex-row gap-20">
      <img src={admin} alt="admin" className="md:hidden" />
      <AdminLinks />
      <img src={admin} alt="admin" className="md:w-1/2 hidden md:block" />
    </div>
  );
};

export default AdminHome;
