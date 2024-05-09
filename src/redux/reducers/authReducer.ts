import { AnyAction, Dispatch } from "redux";
import { authAPI, securityApi } from "../../api/api";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL";
// Xk2CBpZfXaMPh!f
export type AuthActionsType =
  | ReturnType<typeof setAuthUserData>
  | ReturnType<typeof setCaptchaURL>;

export type AuthDataType = {
  id: null | number;
  login: null | string;
  email: null | string;
  captchaURL: null | string;
};

type AuthStateType = AuthDataType & { isAuth: boolean };

const initialState: AuthStateType = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captchaURL: null,
};

export const authReducer = (
  state = initialState,
  action: AuthActionsType
): AuthStateType => {
  switch (action.type) {
    case SET_AUTH_USER_DATA: {
      return {
        ...action.userData,
        isAuth: action.isAuth,
      };
    }
    case SET_CAPTCHA_URL: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export const setAuthUserData = (userData: AuthDataType, isAuth: boolean) =>
  ({
    type: SET_AUTH_USER_DATA,
    userData,
    isAuth,
  } as const);
export const setCaptchaURL = (captchaURL: string) =>
  ({
    type: SET_CAPTCHA_URL,
    payload: { captchaURL },
  } as const);

export const getAuthUserDataTC = () => async (dispatch: Dispatch) => {
  let data = await authAPI.getAuthUserData();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(data.data, true));
  }
};
export const login =
  (formData: FormDataType): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    let data = await authAPI.login(formData);
    if (data.resultCode === 0) {
      dispatch(getAuthUserDataTC());
    } else if (data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
  };
export const getCaptchaUrl =
  () =>
  async (dispatch: Dispatch): Promise<any> => {
    let data = await securityApi.getCaptchaURL();
    dispatch(setCaptchaURL(data.url));
  };
export const logout =
  (): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch) => {
    authAPI.logout().then((data) => {
      if (data.resultCode === 0) {
        const userData: AuthDataType = {
          id: null,
          login: null,
          email: null,
          captchaURL: null,
        };
        dispatch(setAuthUserData(userData, false));
      }
    });
  };

type FormDataType = {
  email: string;
  password: string;
  rememberMe?: boolean;
  captcha?: string;
};
