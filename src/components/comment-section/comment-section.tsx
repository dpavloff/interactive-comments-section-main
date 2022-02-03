import React from "react";

import CommentThread from "../comment-thread/comment-thread";
import CommentBox from "../comment-box/comment-box";
import CommentSectionStub from "../comment-section-stub/comment-section-stub";
import { Comment } from "../../types/Comment";
import { UserVotes } from "../../types/UserVotes";
import "./comment-section.css";
import { RootState } from "../../redux/store";
import { connect } from "react-redux";

interface ICommentSectionProps {
  comments: Comment[];
  currentUserVotes: Record<string, UserVotes>;
}

const CommentSection: React.FC<ICommentSectionProps> = ({
  comments,
  currentUserVotes,
}) => {
  const [currReplyingToPostNo, setCurrReplyingToPostNo] = React.useState(-1);

  return (
    <div className="comment-section">
      {comments.length ? (
        comments.map((comment) => {
          return (
            <div className="comment-thread">
              <CommentBox
                key={comment.id}
                id={comment.id}
                threadID={comment.id}
                content={comment.content}
                createdAt={comment.createdAt}
                score={comment.score}
                currentUserScore={currentUserVotes[comment.id]}
                image={comment.user.image}
                author={comment.user.username}
                currOpen={currReplyingToPostNo}
                setCurrOpen={setCurrReplyingToPostNo}
              />
              {comment.replies.length ? (
                <CommentThread
                  threadID={comment.id}
                  currentUserVotes={currentUserVotes}
                  replies={Array.from(comment.replies)}
                  currOpen={currReplyingToPostNo}
                  setCurrOpen={setCurrReplyingToPostNo}
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

const mapStateToProps = (state: RootState) => ({
  currentUserVotes: state.currentUser.commentVotes,
});

export default connect(mapStateToProps)(CommentSection);
