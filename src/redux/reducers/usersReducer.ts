import { Dispatch } from "redux";
import { usersAPI } from "../../api/api";

const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_IS_FOLLOWING = "SET_IS_FOLLOWING";

export type UsersActionsType =
  | ReturnType<typeof toggleFollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setIsFetching>
  | ReturnType<typeof setIsFollowing>;

export type UserDataType = {
  id: number;
  name: string;
  photos: {
    small: null | string;
    large: null | string | undefined;
  };
  status: null | string;
  uniqueUrlName: null | string;
  followed: boolean;
};

const initialState = {
  users: [] as UserDataType[],
  currentPage: 1,
  pageSize: 10,
  totalUsersCount: 0,
  isFetching: false,
  isFollowing: [] as number[],
};

export type UsersPageStateType = typeof initialState;

export const usersReducer = (
  state: UsersPageStateType = initialState,
  action: UsersActionsType
): UsersPageStateType => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload ? { ...u, followed: !u.followed } : u
        ),
      };
    case SET_USERS:
      return { ...state, users: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case SET_TOTAL_USERS:
      return { ...state, totalUsersCount: action.payload };
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.payload };
    case SET_IS_FOLLOWING:
      return {
        ...state,
        isFollowing: action.isFetching
          ? [...state.isFollowing, action.userId]
          : state.isFollowing.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export const toggleFollow = (payload: number) =>
  ({
    type: TOGGLE_FOLLOW,
    payload,
  } as const);
export const setUsers = (payload: UserDataType[]) =>
  ({
    type: SET_USERS,
    payload,
  } as const);
export const setCurrentPage = (payload: number) =>
  ({
    type: SET_CURRENT_PAGE,
    payload,
  } as const);
export const setTotalUsersCount = (payload: number) =>
  ({
    type: SET_TOTAL_USERS,
    payload,
  } as const);
export const setIsFetching = (payload: boolean) =>
  ({
    type: SET_IS_FETCHING,
    payload,
  } as const);
export const setIsFollowing = (isFetching: boolean, userId: number) =>
  ({
    type: SET_IS_FOLLOWING,
    isFetching,
    userId,
  } as const);

export const getUsersTC =
  (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(setIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(setIsFetching(false));
    });
  };
export const followUsersTC = (userId: number) => (dispatch: Dispatch) => {
  dispatch(setIsFollowing(true, userId));
  usersAPI.followUser(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(toggleFollow(userId));
    }
    dispatch(setIsFollowing(false, userId));
  });
};
export const unfollowUsersTC = (userId: number) => (dispatch: Dispatch) => {
  dispatch(setIsFollowing(true, userId));
  usersAPI.unfollowUser(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(toggleFollow(userId));
    }
    dispatch(setIsFollowing(false, userId));
  });
};
