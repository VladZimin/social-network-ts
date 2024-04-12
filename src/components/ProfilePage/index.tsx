import React, { FC } from "react";

import s from "./Profile.module.css";
import profileImg from "../../assets/profileImg.jpeg";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { ProfileDataType } from "../../redux/reducers/profileReducer";
import defaultPhoto from "../../assets/deafaultPhotopng.png";

export type ProfilePageType = {
  profileData: ProfileDataType | null;
};

export const ProfilePage: FC<ProfilePageType> = ({ profileData }) => {
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
                profileData.photos.large
                  ? profileData.photos.large
                  : defaultPhoto
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
