import React from "react";
import { ProfileDataType } from "../../../redux/reducers/profileReducer";
import { Contact } from "./Contact";

type ContactsKeys =
  | "facebook"
  | "vk"
  | "website"
  | "twitter"
  | "instagram"
  | "youtube"
  | "github"
  | "mainLink";
type Props = {
  profileData: ProfileDataType;
};

export const ProfileData = ({ profileData }: Props) => {
  return (
    <>
      <div>
        <b>Full name:</b> {profileData.fullName}
      </div>
      <div>
        <b>About me:</b> {profileData.aboutMe}
      </div>
      <div>
        <b>Looking for a job:</b> {profileData.lookingForAJob ? "yes" : "no"}
      </div>
      <div>
        <b>Description:</b> {profileData.lookingForAJobDescription}
      </div>
      <div>
        <b>Contacts:</b>{" "}
        {profileData.contacts &&
          Object.keys(profileData.contacts).map((key) => (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profileData.contacts[key as ContactsKeys]}
            />
          ))}
      </div>
    </>
  );
};
