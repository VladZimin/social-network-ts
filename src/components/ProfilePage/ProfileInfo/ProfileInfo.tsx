import React, { ChangeEvent, useState } from "react";

import defaultPhoto from "../../../assets/deafaultPhotopng.png";
import { ProfileDataType } from "../../../redux/reducers/profileReducer";
import { ProfileStatus } from "./ProfileStatus";
import { ProfileData } from "./ProfileData";
import { ProfileFormData, ProfileFormDataType } from "./ProfileFormData";

export type ProfileInfoType = {
  profileData: ProfileDataType | null;
  status: string;
  updateStatus: (status: string) => void;
  isOwner: boolean;
  savePhoto: (file: File) => void;
  updateProfile: (data: ProfileFormDataType) => void;
};

export const ProfileInfo = ({
  profileData,
  status,
  isOwner,
  updateStatus,
  savePhoto,
  updateProfile,
}: ProfileInfoType) => {
  const [editMode, setEditMode] = useState(false);

  const savePhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      savePhoto(e.target.files[0]);
    }
  };
  const saveProfileDataHandler = (data: ProfileFormDataType) => {
    updateProfile(data);
    setEditMode(false);
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
        {editMode ? (
          <ProfileFormData
            profileData={profileData}
            saveProfileData={saveProfileDataHandler}
          />
        ) : (
          <div>
            <button
              onClick={() => {
                setEditMode(true);
              }}
            >
              edit
            </button>
            <ProfileData profileData={profileData} />
          </div>
        )}
      </div>
    )
  );
};
