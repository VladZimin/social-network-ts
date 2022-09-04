export {};

function profileReducer(profile: any, actions: any) {
  return { newPostText: "", postsData: [] };
}

function dialogsReducer(profile: any, actions: any) {
  return { newMessageText: "", dialogsData: [], messagesData: [] };
}

const store = {
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
  dispatch(actions: any) {
    this._state.profilePage = profileReducer(this._state.profilePage, actions);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, actions);
    this._callSubscriber();
  },
};
