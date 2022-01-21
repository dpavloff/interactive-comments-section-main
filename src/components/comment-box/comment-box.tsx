import React, { Component, FC } from "react";
import plus_icon from "../../images/icon-plus.svg";
import minus_icon from "../../images/icon-minus.svg";
import reply_icon from "../../images/icon-reply.svg";
import edit_icon from "../../images/icon-edit.svg";
import delete_icon from "../../images/icon-delete.svg";

import { Comment } from "../../types/Comment";
import { Image } from "../../types/Image";

interface ICommentBoxProps {
  content: string;
  createdAt: string;
  score: number;
  image: Image;
  username: string;
}

const CommentBox: FC<ICommentBoxProps> = ({
  content,
  createdAt,
  score,
  image,
  username,
}) => {
  return (
    <div className="comment">
      <div className="comment-vote">
        <img className="vote-up" src={plus_icon} />
        <div className="vote-rating">{score}</div>
        <img className="vote-down" src={minus_icon} />
      </div>
      <div className="comment-user">
        <div className="comment-info">
          <img
            className="user-avatar"
            src={image.png}
            alt={username + " profile pic"}
          />
          <p className="comment-age">{createdAt}</p>
        </div>
        <div className="comment-buttons">
          <div className="comment-delete-button">
            <img src={delete_icon} alt="" />
            <p>Delete</p>
          </div>
          <div className="comment-reply-button">
            <img src={reply_icon} alt="" />
            <p>Reply</p>
          </div>
        </div>
      </div>
      <div className="comment-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CommentBox;
