import React, { Component, FC } from "react";

import CommentThread from "../comment-thread/comment-thread";
import CommentBox from "../comment-box/comment-box";
import CommentSectionStub from "../comment-section-stub/comment-section-stub";
import { Comment } from "../../types/Comment";
import "./comment-section.css";

interface ICommentSectionProps {
  comments: Comment[];
}

const CommentSection: FC<ICommentSectionProps> = ({ comments }) => {
  return (
    <div className="comment-section">
      {comments.length ? (
        comments.map((comment) => {
          return <CommentThread key={comment.id} comment={comment} />;
        })
      ) : (
        <CommentSectionStub />
      )}
    </div>
  );
};

export default CommentSection;
