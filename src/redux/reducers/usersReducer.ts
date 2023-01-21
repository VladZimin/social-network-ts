const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const SET_IS_FETCHING = "SET_IS_FETCHING";

export type UsersActionsType =
  | ReturnType<typeof toggleFollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setIsFetching>;

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
  totalUsersCount: 100,
  isFetching: false,
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
