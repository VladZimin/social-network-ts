import { ActionsTypes, DialogsPageType } from "../state";

const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";

export type DialogsActionsType =
  | ReturnType<typeof sendMessage>
  | ReturnType<typeof updateMessageText>;

export const dialogsReducer = (
  state: DialogsPageType,
  { type, payload }: ActionsTypes
) => {
  switch (type) {
    case SEND_MESSAGE:
      state.messagesData.push({ id: 5, message: payload });
      state.newMessageText = "";
      return state;
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = payload;
      return state;
    default:
      return state;
  }
};

export const sendMessage = (payload: string) =>
  ({
    type: SEND_MESSAGE,
    payload,
  } as const);
export const updateMessageText = (payload: string) =>
  ({
    type: UPDATE_MESSAGE_TEXT,
    payload,
  } as const);
