import { NavLink, Outlet } from "react-router-dom";
import Header from "../ReuseableCom/Header";


const ContactMain = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-5">
        <div className="col-span-1 border border-black min-h-screen text-center flex flex-col items-center justify-center gap-5 font-bold">
            <NavLink className={({isActive}:any)=> isActive && "border-y text-blue-900"} to="/">Contact</NavLink>
            <NavLink className={({isActive}:any)=> isActive && "border-y text-blue-900"} to="/cartmap">Charts and Maps</NavLink>
            <h1>SideBar</h1>
        </div>
        <div className="col-span-4">
            <Outlet/>
        </div>
      </div>
    </>
  );
};

export default ContactMain;
