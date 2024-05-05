import { AnyAction } from "redux";
import { getAuthUserDataTC } from "./authReducer";
import { RootState } from "../store";
import { ThunkAction } from "redux-thunk";

// Xk2CBpZfXaMPh!f
const SET_IS_INITIALIZED = "SET_IS_INITIALIZED";
export type AppActionsType = ReturnType<typeof setIsInitialized>;

type AppStateType = { isInitialized: boolean };

const initialState: AppStateType = {
  isInitialized: false,
};

export const appReducer = (
  state = initialState,
  action: AppActionsType
): AppStateType => {
  switch (action.type) {
    case SET_IS_INITIALIZED: {
      return {
        ...state,
        isInitialized: true,
      };
    }
    default:
      return state;
  }
};

export const setIsInitialized = () => ({ type: SET_IS_INITIALIZED } as const);

export const initializeApp =
  (): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch) => {
    dispatch(getAuthUserDataTC()).then(() => {
      dispatch(setIsInitialized());
    });
  };
