// import { CgProfile } from "react-icons/cg";
// import { MdOutlineNotificationAdd } from "react-icons/md";
import useAuthUserInfo from "../../../hooks/useAuthUserInfo";
import { useGetUserInfoQuery } from "../../../Redux/Feature/Public User/user";
import { TUser } from "../../../Types/user.type";
import ProfileDropDown from "../Navbar/ProfileDropDown";

const DashboardNavbar = () => {
  const { user } = useAuthUserInfo();
  const { data: userData } = useGetUserInfoQuery(user?.id, { skip: !user?.id });
  return (
    <div className="flex justify-between items-center p-3 px-5 md:px-10 gap-5">
      {/* should be use role dynamic  */}
      <div className="text-4xl font-serif font-bold text-primary ">
        Welcome to {user?.role}
      </div>

      {/* notification and profile div  */}
      <div className="flex items-center justify-center gap-5">
        <div>
          <ProfileDropDown  userData={userData as Partial<TUser>} />
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
