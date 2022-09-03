import { PostDataType, ProfileDataType, ProfilePageType } from "../state";

const ADD_POST = "ADD_POST";
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

export type ProfileActionsType =
  | ReturnType<typeof addPost>
  | ReturnType<typeof updatePostText>
  | ReturnType<typeof setUserProfile>;

const initialState: ProfilePageType = {
  postsData: [
    { id: 1, postText: "Привет!", likesCount: 27 },
    { id: 2, postText: "Как дела?", likesCount: 77 },
    { id: 3, postText: "Its OK!!", likesCount: 68 },
  ],
  newPostText: "",
  profileData: null,
};

export const profileReducer = (
  state: ProfilePageType = initialState,
  action: ProfileActionsType
) => {
  switch (action.type) {
    case ADD_POST:
      const newPostMessage: PostDataType = {
        id: 4,
        postText: state.newPostText,
        likesCount: 98,
      };
      const newState: ProfilePageType = {
        ...state,
        postsData: [...state.postsData, newPostMessage],
        newPostText: "",
      };
      return newState;
    case UPDATE_POST_TEXT:
      return { ...state, newPostText: action.payload };
    case SET_USER_PROFILE:
      return { ...state, profileData: action.payload };
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
