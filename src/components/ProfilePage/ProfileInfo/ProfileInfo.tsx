import React, { FC } from "react";

import defaultPhoto from "../../../assets/deafaultPhotopng.png";
import { ProfileDataType } from "../../../redux/reducers/profileReducer";
import { ProfileStatus } from "./ProfileStatus";

export type ProfileInfoType = {
  profileData: ProfileDataType | null;
  status: string;
  updateStatus: (status: string) => void;
};

export const ProfileInfo: FC<ProfileInfoType> = ({
  profileData,
  status,
  updateStatus,
}) => {
  return (
    profileData && (
      <div>
        <img
          src={
            profileData.photos.large ? profileData.photos.large : defaultPhoto
          }
          alt="Avatar"
        />
        <ProfileStatus status={status} updateStatus={updateStatus} />
      </div>
    )
  );
};
