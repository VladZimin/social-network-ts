import { AnyAction, Dispatch } from "redux";
import { profilesAPI } from "../../api/api";
import { ProfileFormDataType } from "../../components/ProfilePage/ProfileInfo/ProfileFormData";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";

const ADD_POST = "ADD_POST";
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";
const SET_PROFILE_PHOTO = "SET_PROFILE_PHOTO";

export type ProfileActionsType =
  | ReturnType<typeof addPost>
  | ReturnType<typeof updatePostText>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setUserStatus>
  | ReturnType<typeof setProfilePhoto>;

export type PostDataType = {
  id: number;
  postText: string;
  likesCount: number;
};
export type ProfileDataType = {
  aboutMe: null | string;
  contacts: {
    facebook: null | string;
    website: null | string;
    vk: null | string;
    twitter: null | string;
    instagram: null | string;
    youtube: null | string;
    github: null | string;
    mainLink: null | string;
  };
  lookingForAJob: boolean;
  lookingForAJobDescription: null | string;
  fullName: string;
  userId: number;
  photos: {
    small: null | string;
    large: null | string;
  };
};

export type ProfileStateType = {
  postsData: PostDataType[];
  newPostText: string;
  profileData: ProfileDataType;
  profileStatus: string;
};
const initialState: ProfileStateType = {
  postsData: [
    { id: 1, postText: "Привет!", likesCount: 27 },
    { id: 2, postText: "Как дела?", likesCount: 77 },
    { id: 3, postText: "Its OK!!", likesCount: 68 },
  ],
  newPostText: "",
  profileData: {} as ProfileDataType,
  profileStatus: "",
};

export const profileReducer = (
  state = initialState,
  action: ProfileActionsType
): ProfileStateType => {
  switch (action.type) {
    case ADD_POST:
      const newPostMessage: PostDataType = {
        id: 4,
        postText: state.newPostText,
        likesCount: 98,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPostMessage],
        newPostText: "",
      };
    case UPDATE_POST_TEXT:
      return { ...state, newPostText: action.payload };
    case SET_USER_PROFILE:
      return { ...state, profileData: action.payload };
    case SET_PROFILE_STATUS:
      return { ...state, profileStatus: action.status };
    case SET_PROFILE_PHOTO:
      return {
        ...state,
        profileData: { ...state.profileData, photos: action.photos },
      };
    default:
      return state;
  }
};

export const addPost = () =>
  ({
    type: ADD_POST,
  } as const);
export const updatePostText = (payload: string) =>
  ({
    type: UPDATE_POST_TEXT,
    payload,
  } as const);
export const setUserProfile = (payload: ProfileDataType) =>
  ({
    type: SET_USER_PROFILE,
    payload,
  } as const);
export const setUserStatus = (status: string) =>
  ({
    type: SET_PROFILE_STATUS,
    status,
  } as const);
export const setProfilePhoto = (photos: { small: string; large: string }) =>
  ({
    type: SET_PROFILE_PHOTO,
    photos,
  } as const);

export const getUserProfileTC = (userId: string) => (dispatch: Dispatch) => {
  profilesAPI
    .getUserProfile(userId)
    .then((data) => {
      dispatch(setUserProfile(data));
      return profilesAPI.getProfileStatus(userId);
    })
    .then((res) => {
      dispatch(setUserStatus(res));
    });
};
export const updateProfilePhotoTC = (file: File) => (dispatch: Dispatch) => {
  profilesAPI.updateProfilePhoto(file).then((data) => {
    dispatch(setProfilePhoto(data.data.photos));
  });
};
export const updateProfileDataTC =
  (
    data: ProfileFormDataType
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch, getState) => {
    const userId = getState().profilePage.profileData.userId;
    const updateData: Omit<ProfileDataType, "photos"> = {
      userId,
      aboutMe: data.aboutMe,
      fullName: data.fullName,
      lookingForAJob: data.lookingForAJob,
      lookingForAJobDescription: data.description,
      contacts: {
        facebook: data.facebook,
        github: data.github,
        instagram: data.instagram,
        vk: data.vk,
        twitter: data.twitter,
        website: data.website,
        mainLink: data.mainLink,
        youtube: data.youtube,
      },
    };
    profilesAPI.updateProfileData(updateData).then(() => {
      dispatch(getUserProfileTC(userId.toString()));
    });
  };
export const updateProfileStatusTC =
  (status: string) => (dispatch: Dispatch) => {
    profilesAPI.updateProfileStatus(status).then((res) => {
      if (res.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
    });
  };
