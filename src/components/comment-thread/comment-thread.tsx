import React, { FC } from "react";

import { Reply } from "../../types/Comment";
import CommentBox from "../comment-box/comment-box";
import "./comment-thread.css";

interface ICommentSectionProps {
  threadID: number;
  replies: Reply[];
  currOpen: number;
  setCurrOpen: React.Dispatch<React.SetStateAction<number>>;
}

const CommentThread: FC<ICommentSectionProps> = ({
  threadID,
  replies,
  currOpen,
  setCurrOpen,
}) => {
  return (
    <>
      <div className="comment-replies-section">
        <div className="thread-line"></div>
        <div className="comment-replies">
          {replies.map((reply) => {
            return (
              <CommentBox
                key={reply.id}
                author={reply.user.username}
                id={reply.id}
                content={reply.content}
                score={reply.score}
                image={reply.user.image}
                createdAt={reply.createdAt}
                threadID={threadID}
                currOpen={currOpen}
                setCurrOpen={setCurrOpen}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CommentThread;
