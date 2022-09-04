const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";

export type DialogsActionsType =
  | ReturnType<typeof sendMessage>
  | ReturnType<typeof updateMessageText>;

export type MessageDataType = {
  id: number;
  message: string;
};
export type DialogDataType = {
  id: number;
  name: string;
};

const initialState = {
  messagesData: [
    { id: 1, message: "Hello" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Fine! U?" },
    { id: 4, message: "Good!" },
  ] as MessageDataType[],
  dialogsData: [
    { id: 1, name: "Ivan" },
    { id: 2, name: "Vlad" },
    { id: 3, name: "Denis" },
    { id: 4, name: "Viktor" },
    { id: 5, name: "Vadim" },
    { id: 6, name: "Kolya" },
  ] as DialogDataType[],
  newMessageText: "",
};

export type DialogsStateType = typeof initialState;

export const dialogsReducer = (
  state: DialogsStateType = initialState,
  action: DialogsActionsType
): DialogsStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMsg: MessageDataType = { id: 5, message: state.newMessageText };
      return {
        ...state,
        messagesData: [...state.messagesData, newMsg],
        newMessageText: "",
      };
    case UPDATE_MESSAGE_TEXT:
      return { ...state, newMessageText: action.payload };
    default:
      return state;
  }
};

export const sendMessage = () =>
  ({
    type: SEND_MESSAGE,
  } as const);
export const updateMessageText = (payload: string) =>
  ({
    type: UPDATE_MESSAGE_TEXT,
    payload,
  } as const);
