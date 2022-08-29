import { UserDataType, UsersPageType } from "../state";

const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";

export type UsersActionsType =
  | ReturnType<typeof toggleFollow>
  | ReturnType<typeof setUsers>;

const initialState: UsersPageType = {
  users: [],
};

export const usersReducer = (
  state: UsersPageType = initialState,
  action: UsersActionsType
) => {
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
