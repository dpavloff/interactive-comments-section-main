import { PayloadAction } from "@reduxjs/toolkit";

import * as actions from "../actions/commentsActions";

export const initialState = {
  currentUser: {
    image: {
      png: "",
      webp: "",
    },
    username: "",
    commentVotes: {},
  },
  comments: [],
  isLoading: false,
};

export default function commentsReducer(
  state = initialState,
  action: PayloadAction<any>
) {
  switch (action.type) {
    case actions.API_GET_COMMENTS_AND_CURR_USER: {
      return {
        isLoading: true,
        comments: [],
        currentUser: {
          image: {
            png: "",
            webp: "",
          },
          username: "",
          commentVotes: {},
        },
      };
    }

    case actions.API_GET_COMMENTS_AND_CURR_USER_SUCCESS: {
      return {
        isLoading: false,
        comments: action.payload.comments,
        currentUser: action.payload.currentUser,
      };
    }

    default: {
      return {
        currentUser: state.currentUser,
        isLoading: state.isLoading,
        comments: state.comments,
      };
    }
  }
}
