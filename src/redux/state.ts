//ProfilePage Types
export type PostDataType = {
  id: number;
  postText: string;
  likesCount: number;
};
export type ProfilePageType = {
  postsData: PostDataType[];
  newPostText: string;
};

// DialogsPage Types
export type MessageDataType = {
  id: number;
  message: string;
};
export type DialogDataType = {
  id: number;
  name: string;
};
export type DialogsPageType = {
  messagesData: MessageDataType[];
  dialogsData: DialogDataType[];
  newMessageText: string;
};

// UsersPage Types

export type UserDataType = {
  id: number;
  name: string;
  photos: {
    small: null | string;
    large: null | string;
  };
  status: null | string;
  uniqueUrlName: null | string;
  followed: boolean;
};

export type UsersPageType = {
  users: UserDataType[];
  currentPage: number;
  pageSize: number;
  totalUsersCount: number;
};

/*
export const store: StoreType = {
  _state: {
    dialogsPage: {
      messagesData: [
        { id: 1, message: "Hello" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Fine! U?" },
        { id: 4, message: "Good!" },
      ],
      dialogsData: [
        { id: 1, name: "Ivan" },
        { id: 2, name: "Vlad" },
        { id: 3, name: "Denis" },
        { id: 4, name: "Viktor" },
        { id: 5, name: "Vadim" },
        { id: 6, name: "Kolya" },
      ],
      newMessageText: "",
    },
    profilePage: {
      postsData: [
        { id: 1, postText: "Привет!", likesCount: 27 },
        { id: 2, postText: "Как дела?", likesCount: 77 },
        { id: 3, postText: "Its OK!!", likesCount: 68 },
      ],
      newPostText: "",
    },
  },
  _callSubscriber() {
    console.log("Rerender");
  },

  getState() {
    return this._state;
  },
  subscribe(observer: () => void) {
    this._callSubscriber = observer;
  },
  dispatch(actions) {
    this._state.profilePage = profileReducer(this._state.profilePage, actions);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, actions);
    this._callSubscriber();
  },
};
*/
