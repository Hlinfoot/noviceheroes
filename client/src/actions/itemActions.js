import axios from "axios";
import { GET_COMMENTS, ADD_COMMENT, DELETE_COMMENT, COMMENTS_LOADING } from "./types";

export const getComments = () => (dispatch) => {
  dispatch(settCommentsLoading());
  axios.get("/api/items").then((res) =>
    dispatch({
      type: GET_COMMENTS,
      payload: res.data,
    })
  );
};

export const addComment = (comment) => (dispatch) => {
  axios.post("/api/items", comment).then((res) =>
    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    })
  );
};

export const deleteComment = (id) => (dispatch) => {
  axios.delete(`/api/items/${id}`).then((res) =>
    dispatch({
      type: DELETE_COMMENT,
      payload: id,
    })
  );
};

export const settCommentsLoading = () => {
  return {
    type: COMMENTS_LOADING,
  };
};
