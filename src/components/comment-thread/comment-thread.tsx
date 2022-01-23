import React, { FC } from "react";

import { Comment } from "../../types/Comment";
import CommentBox from "../comment-box/comment-box";
import "./comment-thread.css";

interface ICommentSectionProps {
  comment: Comment;
}

const CommentThread: FC<ICommentSectionProps> = ({ comment }) => {
  return (
    <div className="comment-thread">
      <CommentBox
        key={comment.id}
        content={comment.content}
        createdAt={comment.createdAt}
        score={comment.score}
        image={comment.user.image}
        username={comment.user.username}
      />
      {comment.replies.length ? (
        <div className="comment-replies">
          <div className="thread-line"></div>
          <div className="comment-replies-boxes">
            {comment.replies.map((reply) => {
              return (
                <CommentBox
                  key={reply.id}
                  content={reply.content}
                  createdAt={reply.createdAt}
                  score={reply.score}
                  image={reply.user.image}
                  username={reply.user.username}
                />
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CommentThread;
