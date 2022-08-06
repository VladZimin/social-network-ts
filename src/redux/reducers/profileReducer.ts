import { ActionsTypes, PostDataType, ProfilePageType } from "../state";

const ADD_POST = "ADD_POST";
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";

export type ProfileActionsType =
  | ReturnType<typeof addPost>
  | ReturnType<typeof updatePostText>;

export const profileReducer = (
  state: ProfilePageType,
  { type, payload }: ActionsTypes
) => {
  switch (type) {
    case ADD_POST:
      const newPostMessage: PostDataType = {
        id: 4,
        postText: payload,
        likesCount: 98,
      };
      state.postsData.push(newPostMessage);
      state.newPostText = "";
      return state;
    case UPDATE_POST_TEXT:
      state.newPostText = payload;
      return state;
    default:
      return state;
  }
};

export const addPost = (payload: string) =>
  ({
    type: ADD_POST,
    payload,
  } as const);
export const updatePostText = (payload: string) =>
  ({
    type: UPDATE_POST_TEXT,
    payload,
  } as const);
