import { combineReducers, createStore } from "redux";
import { profileReducer } from "./reducers/profileReducer";
import { dialogsReducer } from "./reducers/dialogsReducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
});

export const store = createStore(reducers);
