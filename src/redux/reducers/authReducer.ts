const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

export type AuthActionsType = ReturnType<typeof setAuthUserData>;

export type AuthDataType = {
  id: null | number;
  login: null | string;
  email: null | string;
};

type AuthStateType = AuthDataType & { isAuth: boolean };

const initialState: AuthStateType = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

export const authReducer = (
  state = initialState,
  action: AuthActionsType
): AuthStateType => {
  switch (action.type) {
    case SET_AUTH_USER_DATA: {
      return {
        ...action.payload,
        isAuth: true,
      };
    }
    default:
      return state;
  }
};

export const setAuthUserData = (payload: AuthDataType) =>
  ({
    type: SET_AUTH_USER_DATA,
    payload,
  } as const);
