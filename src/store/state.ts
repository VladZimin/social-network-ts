export type PostDataType = {
  id: number;
  postText: string;
  likesCount: number;
};
export type MessageDataType = {
  id: number;
  message: string;
};
export type DialogDataType = {
  id: number;
  name: string;
};
export type ProfilePageType = {
  postsData: PostDataType[];
  newPostText: string;
};
export type DialogsPageType = {
  messagesData: MessageDataType[];
  dialogsData: DialogDataType[];
};
export type StateType = {
  dialogsPage: DialogsPageType;
  profilePage: ProfilePageType;
};

type StoreType = {
  _state: StateType;
  getState: () => StateType;
  _callSubscriber: () => void;
  addPost: () => void;
  updatePostText: (newText: string) => void;
  subscriber: (observer: () => void) => void;
};
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
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("Rerender");
  },
  addPost() {
    const newPostMessage: PostDataType = {
      id: 4,
      postText: this._state.profilePage.newPostText,
      likesCount: 98,
    };
    this._state.profilePage.postsData.push(newPostMessage);
    this._callSubscriber();
  },
  updatePostText(newText: string) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber();
  },
  subscriber(observer: () => void) {
    this._callSubscriber = observer;
  },
};
