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
  const [currOpen, setCurrOpen] = React.useState(-1);

  return (
    <div className="comment-section">
      {comments.length ? (
        comments.map((comment) => {
          return (
            <div className="comment-thread">
              <CommentBox
                key={comment.id}
                id={comment.id}
                content={comment.content}
                createdAt={comment.createdAt}
                score={comment.score}
                image={comment.user.image}
                author={comment.user.username}
                currOpen={currOpen}
                setCurrOpen={setCurrOpen}
              />
              {comment.replies.length ? (
                <CommentThread
                  threadID={comment.id}
                  replies={Array.from(comment.replies)}
                  currOpen={currOpen}
                  setCurrOpen={setCurrOpen}
                />
              ) : (
                ""
              )}
            </div>
          );
        })
      ) : (
        <CommentSectionStub />
      )}
    </div>
  );
};

export default CommentSection;
