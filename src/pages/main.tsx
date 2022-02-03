import React from "react";

import CommentSection from "../components/comment-section/comment-section";
import { useAppDispatch } from "../redux/hooks";
import { RootState } from "../redux/store";
import { fetchCommentsAndUser } from "../redux/actions/commentsActions";
import { connect } from "react-redux";
import { User } from "../types/User";
import { Comment } from "../types/Comment";
import { GridLoader } from "react-spinners";
import "./main.css";

interface IMain {
  isLoading: boolean;
  comments: Comment[];
  user: User;
}

const Main: React.FC<IMain> = ({ isLoading, comments, user }) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchCommentsAndUser());
  }, [dispatch]);

  return (
    <div className="main">
      {isLoading ? (
        <div className="loader">
          <GridLoader loading={isLoading} color="hsl(238, 40%, 52%)" />
        </div>
      ) : (
        <CommentSection comments={comments} />
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  isLoading: state.isLoading,
  comments: state.comments,
  user: state.currentUser,
});

export default connect(mapStateToProps)(Main);
