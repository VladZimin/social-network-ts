import { Dispatch } from "redux";
import { authAPI } from "../../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const LOGIN_USER = "LOGIN_USER";

export type AuthActionsType =
  | ReturnType<typeof setAuthUserData>
  | ReturnType<typeof loginUser>;

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
    case LOGIN_USER: {
      return {
        ...state,
        isAuth: action.isAuth,
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
export const loginUser = (isAuth: boolean) =>
  ({
    type: LOGIN_USER,
    isAuth,
  } as const);

export const getAuthUserDataTC = () => (dispatch: Dispatch) => {
  authAPI.getAuthUserData().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(data.data));
    }
  });
};
export const loginUserTC = (formData: FormDataType) => (dispatch: Dispatch) => {
  authAPI.login(formData).then((data) => {
    if (data.resultCode === 0) {
      dispatch(loginUser(true));
    }
  });
};

type FormDataType = {
  email: string;
  password: string;
  rememberMe?: boolean;
  captcha?: boolean;
};
