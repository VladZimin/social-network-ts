import React from "react";
import { ProfileDataType } from "../../../redux/reducers/profileReducer";
import { useFormik } from "formik";

export type ProfileFormDataType = {
  fullName: string;
  aboutMe: string;
  lookingForAJob: boolean;
  description: string;
  facebook: string;
  vk: string;
  website: string;
  twitter: string;
  instagram: string;
  youtube: string;
  github: string;
  mainLink: string;
};
type Props = {
  profileData: ProfileDataType;
  saveProfileData: (data: ProfileFormDataType) => void;
};
const initialValues = {
  fullName: "",
  aboutMe: "",
  lookingForAJob: false,
  description: "",
  facebook: "",
  vk: "",
  website: "",
  twitter: "",
  instagram: "",
  youtube: "",
  github: "",
  mainLink: "",
};

export const ProfileFormData = ({ profileData, saveProfileData }: Props) => {
  const formik = useFormik({
    initialValues: {
      fullName: profileData.fullName || "",
      aboutMe: profileData.aboutMe || "",
      lookingForAJob: profileData.lookingForAJob,
      description: profileData.lookingForAJobDescription || "",
      facebook: profileData.contacts.facebook || "",
      vk: profileData.contacts.vk || "",
      website: profileData.contacts.website || "",
      twitter: profileData.contacts.twitter || "",
      instagram: profileData.contacts.instagram || "",
      youtube: profileData.contacts.instagram || "",
      github: profileData.contacts.github || "",
      mainLink: profileData.contacts.mainLink || "",
    },
    onSubmit: (values) => {
      saveProfileData(values);
      formik.resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="fullName">Full name:</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.fullName}
        />
        {formik.errors.fullName && formik.touched.fullName ? (
          <div>{formik.errors.fullName}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="aboutMe">About me:</label>
        <input
          id="aboutMe"
          name="aboutMe"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.aboutMe}
        />
        {formik.errors.aboutMe && formik.touched.aboutMe ? (
          <div>{formik.errors.aboutMe}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="lookingForAJob">Looking for a job:</label>
        <input
          id="lookingForAJob"
          name="lookingForAJob"
          type="checkbox"
          onChange={formik.handleChange}
          checked={formik.values.lookingForAJob}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        {formik.errors.description && formik.touched.description ? (
          <div>{formik.errors.description}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="facebook">Facebook</label>
        <input
          id="facebook"
          name="facebook"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.facebook}
        />
        {formik.errors.facebook && formik.touched.facebook ? (
          <div>{formik.errors.facebook}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="vk">VK:</label>
        <input
          id="vk"
          name="vk"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.vk}
        />
        {formik.errors.vk && formik.touched.vk ? (
          <div>{formik.errors.vk}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="website">Website:</label>
        <input
          id="website"
          name="website"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.website}
        />
        {formik.errors.website && formik.touched.website ? (
          <div>{formik.errors.website}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="twitter">Twitter:</label>
        <input
          id="twitter"
          name="twitter"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.twitter}
        />
        {formik.errors.twitter && formik.touched.twitter ? (
          <div>{formik.errors.twitter}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="instagram">Instagram:</label>
        <input
          id="instagram"
          name="instagram"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.instagram}
        />
        {formik.errors.instagram && formik.touched.instagram ? (
          <div>{formik.errors.instagram}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="youtube">YouTube:</label>
        <input
          id="youtube"
          name="youtube"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.youtube}
        />
        {formik.errors.youtube && formik.touched.youtube ? (
          <div>{formik.errors.youtube}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="github">GitHub:</label>
        <input
          id="github"
          name="github"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.github}
        />
        {formik.errors.github && formik.touched.github ? (
          <div>{formik.errors.github}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="mainLink">Main link:</label>
        <input
          id="mainLink"
          name="mainLink"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.mainLink}
        />
        {formik.errors.mainLink && formik.touched.mainLink ? (
          <div>{formik.errors.mainLink}</div>
        ) : null}
      </div>
      <button type="submit">save</button>
    </form>
  );
};
