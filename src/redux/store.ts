import { combineReducers, createStore } from "redux";
import { profileReducer } from "./reducers/profileReducer";
import { dialogsReducer } from "./reducers/dialogsReducer";
import { usersReducer } from "./reducers/usersReducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
});

export const store = createStore(reducers);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
