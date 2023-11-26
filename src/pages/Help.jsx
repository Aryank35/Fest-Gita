
import ProfileNav from "../Components/Profile-Navbar/ProfileNav";
import Sidebar from "../Components/Profile-Sidebar/Sidebar";
export default function Help() {
  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black h-full">
     
      <div className=" flex flex-col justify-center w-screen h-full ">
        <div className="navbar w-full sm:hidden">
          <ProfileNav />
        </div>
        <div className=" flex justify-center w-full h-full">
          <div className="w-[20%] hidden sm:flex h-screen">
            <Sidebar />
          </div>
          <div className="hero w-[80%] h-full m-4 flex-col justify-center text-center item-center ">
            <p className="text-3xl font-bold text-white">Help and support page....</p>
          </div>
        </div>
      </div>
    </div>
  );
}
