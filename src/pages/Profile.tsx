import { LogoUserPage } from "../Components/LogoUserPage";
import SideBar from "../Components/SideBar";
import React, { useEffect } from "react";
import UserService from "../services/UserService";

const Profile = () => {


  useEffect(() => {
    UserService.fetchUsers().then((res) => {
      console.log(res.data)
    })
  })

  return (
    <div>
      <LogoUserPage />
      <div className={'userPageWrapper'}>
        <SideBar />
      </div>
    </div>
  )
};

export default Profile;
