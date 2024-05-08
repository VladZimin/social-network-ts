import React, { ChangeEvent, FC } from "react";

import defaultPhoto from "../../../assets/deafaultPhotopng.png";
import { ProfileDataType } from "../../../redux/reducers/profileReducer";
import { ProfileStatus } from "./ProfileStatus";

export type ProfileInfoType = {
  profileData: ProfileDataType | null;
  status: string;
  updateStatus: (status: string) => void;
  isOwner: boolean;
  savePhoto: (file: File) => void;
};

export const ProfileInfo: FC<ProfileInfoType> = ({
  profileData,
  status,
  isOwner,
  updateStatus,
  savePhoto,
}) => {
  const savePhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      savePhoto(e.target.files[0]);
    }
  };
  return (
    profileData && (
      <div>
        <img
          src={
            profileData?.photos?.large ? profileData.photos.large : defaultPhoto
          }
          alt="Avatar"
        />
        {isOwner && <input type="file" onChange={savePhotoHandler} />}
        <ProfileStatus status={status} updateStatus={updateStatus} />
      </div>
    )
  );
};
