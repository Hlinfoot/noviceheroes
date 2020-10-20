import {
  GET_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  COMMENTS_LOADING,
} from "../actions/types";

const initialState = {
  items: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case DELETE_COMMENT:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    case ADD_COMMENT:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case COMMENTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
