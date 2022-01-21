import React, { Component, FC } from "react";
import CommentBox from "../comment-box/comment-box";
import CommentSectionStub from "../comment-section-stub/comment-section-stub";
import { Image } from "../../types/Image";
import { Comment } from "../../types/Comment";
import "./comment-section.css";

interface ICommentSectionProps {
  comments: {
    content: string;
    createdAt: string;
    score: number;
    user: {
      image: Image;
      username: string;
    };
    replies?: Comment[];
  }[];
}

const CommentSection: FC<ICommentSectionProps> = ({ comments }) => {
  return (
    <div className="comment-section">
      {comments.map((comment) => {
        return (
          <CommentBox
            content={comment.content}
            createdAt={comment.createdAt}
            score={comment.score}
            image={comment.user.image}
            username={comment.user.username}
          />
        );
      })}
    </div>
  );
};

export default CommentSection;
