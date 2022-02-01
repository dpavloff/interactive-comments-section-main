import { Dispatch } from "redux";

import { CommentAndUser } from "../../types/Comment";
import { apiGetCommentsAndUser } from "../../api/apiGetCommentsAndUser";

export const API_GET_COMMENTS_AND_CURR_USER = "API/GET_COMMENTS_AND_CURR_USER";
export const API_GET_COMMENTS_AND_CURR_USER_SUCCESS =
  "API/GET_COMMENTS_AND_CURR_USER_SUCCESS";

export const getCommentsAndCurrUser = () => ({
  type: API_GET_COMMENTS_AND_CURR_USER,
});
export const getCommentsAndCurrUserSuccess = (data: CommentAndUser) => ({
  type: API_GET_COMMENTS_AND_CURR_USER_SUCCESS,
  payload: data,
});

export function fetchCommentsAndUser() {
  return async (dispatch: Dispatch) => {
    dispatch(getCommentsAndCurrUser());
    try {
      await apiGetCommentsAndUser().then((data) =>
        dispatch(getCommentsAndCurrUserSuccess(data))
      );
    } catch (err) {
      console.log(err);
    }
  };
}
