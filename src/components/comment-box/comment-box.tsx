import React from "react";
import { connect } from "react-redux";

import ReplyForm from "../reply-form/reply-form";
import { Image } from "../../types/Image";
import { RootState } from "../../redux/store";
import { User } from "../../types/User";
import plus_icon from "../../images/icon-plus.svg";
import minus_icon from "../../images/icon-minus.svg";
import reply_icon from "../../images/icon-reply.svg";
import edit_icon from "../../images/icon-edit.svg";
import delete_icon from "../../images/icon-delete.svg";
import "./comment-box.css";

interface ICommentBoxProps {
  id: number;
  content: string;
  replyingTo?: string;
  threadID?: number;
  createdAt: string;
  score: number;
  image: Image;
  author: string;
  currentUser: User;
  currOpen: number;
  setCurrOpen: React.Dispatch<React.SetStateAction<number>>;
}

const CommentBox: React.FC<ICommentBoxProps> = ({
  id,
  content,
  replyingTo,
  threadID,
  createdAt,
  score,
  image,
  author,
  currentUser,
  currOpen,
  setCurrOpen,
}) => {
  const handleReplyClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setCurrOpen(id);
  };

  return (
    <>
      <div className="comment">
        <div className="comment-vote">
          <img className="vote-up" src={plus_icon} />
          <div className="vote-rating">{score}</div>
          <img className="vote-down" src={minus_icon} />
        </div>
        <div className="comment-user">
          <div className="comment-info">
            <picture>
              <source width={42} height={42} srcSet={image.webp} />
              <img
                className="user-avatar"
                width={42}
                height={42}
                src={image.png}
                alt={author + " profile picture"}
              />
            </picture>
            <p className="comment-username">{author}</p>
            <p className="comment-age">{createdAt}</p>
          </div>
          <div className="comment-buttons">
            {currentUser.username === author ? (
              <>
                <div className="comment-delete-button">
                  <img src={delete_icon} width={12} height={14} alt="" />
                  <p>Delete</p>
                </div>
                <div className="comment-edit-button">
                  <img src={edit_icon} width={12} height={14} alt="" />
                  <p>Edit</p>
                </div>
              </>
            ) : (
              ""
            )}
            <div className="comment-reply-button" onClick={handleReplyClick}>
              <img src={reply_icon} width={14} height={13} alt="" />
              <p>Reply</p>
            </div>
          </div>
        </div>
        <div className="comment-content">
          <p>
            {replyingTo && (
              <span className="comment-content-replying-to">
                @{replyingTo}{" "}
              </span>
            )}
            {content}
          </p>
        </div>
      </div>
      {currOpen === id && <ReplyForm reciever={author} />}
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(CommentBox);
