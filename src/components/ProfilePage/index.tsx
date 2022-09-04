import React, { FC } from "react";

import s from "./Profile.module.css";
import profileImg from "../../assets/profileImg.jpeg";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import preloader from "../../assets/loader.svg";
import { ProfileDataType } from "../../redux/reducers/profileReducer";

export type ProfilePageType = {
  profileData: ProfileDataType | null;
};

export const ProfilePage: FC<ProfilePageType> = ({ profileData }) => {
  console.log(preloader);
  return (
    <>
      <div className={s.content}>
        <div className={s.profileImg}>
          <img src={profileImg} alt="Profile Image" />
        </div>
        <div>
          {profileData ? (
            <img
              src={
                profileData.photos.large ? profileData.photos.large : preloader
              }
              alt="Avatar"
            />
          ) : (
            ""
          )}
          ava + description
        </div>
        <MyPostsContainer />
      </div>
    </>
  );
};
