import React, { FC } from "react";

import { Comment, Reply } from "../../types/Comment";
import CommentBox from "../comment-box/comment-box";
import "./comment-thread.css";

interface ICommentSectionProps {
  comment: Comment;
  currOpen: number;
  setCurrOpen: React.Dispatch<React.SetStateAction<number>>;
}

const CommentThread: FC<ICommentSectionProps> = ({
  comment,
  currOpen,
  setCurrOpen,
}) => {
  return (
    <div className="comment-thread">
      <CommentBox
        key={comment.id}
        id={comment.id}
        content={comment.content}
        createdAt={comment.createdAt}
        score={comment.score}
        image={comment.user.image}
        username={comment.user.username}
        currOpen={currOpen}
        setCurrOpen={setCurrOpen}
      />
      {comment.replies.length ? (
        <div className="comment-replies">
          <div className="thread-line"></div>
          <div className="comment-replies-boxes">
            {comment.replies.map((reply: Reply) => {
              return (
                <CommentBox
                  key={reply.id}
                  id={reply.id}
                  content={reply.content}
                  replyingTo={reply.replyingTo}
                  createdAt={reply.createdAt}
                  score={reply.score}
                  image={reply.user.image}
                  username={reply.user.username}
                  currOpen={currOpen}
                  setCurrOpen={setCurrOpen}
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
