import { combineReducers, createStore } from "redux";
import { profileReducer } from "./reducers/profileReducer";
import { dialogsReducer } from "./reducers/dialogsReducer";
import { usersReducer } from "./reducers/usersReducer";
import { authReducer } from "./reducers/authReducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});
export const store = createStore(reducers);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//@ts-ignore
window.__store__ = store;
