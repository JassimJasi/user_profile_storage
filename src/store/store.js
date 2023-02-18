import { createStore } from "redux";

const initialState = {
  user_selected: {},
  user_list: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_SELECTED":
      return {
        ...state,
        user_selected: action.payload,
      };
    case "USER_DETAILS":
      return {
        ...state,
        user_list: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
