import React, { FC } from "react";

import s from "./Profile.module.css";
import profileImg from "../../assets/profileImg.jpeg";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { ProfileDataType } from "../../redux/reducers/profileReducer";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ProfileFormDataType } from "./ProfileInfo/ProfileFormData";

export type ProfilePageType = {
  profileData: ProfileDataType | null;
  status: string;
  updateStatus: (status: string) => void;
  isOwner: boolean;
  savePhoto: (file: File) => void;
  updateProfile: (data: ProfileFormDataType) => void;
};

export const ProfilePage: FC<ProfilePageType> = ({
  profileData,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  updateProfile,
}) => {
  return (
    <>
      <div className={s.content}>
        <div className={s.profileImg}>
          <img src={profileImg} alt="Profile Image" />
        </div>
        <ProfileInfo
          profileData={profileData}
          status={status}
          updateStatus={updateStatus}
          isOwner={isOwner}
          savePhoto={savePhoto}
          updateProfile={updateProfile}
        />
        <MyPostsContainer />
      </div>
    </>
  );
};
