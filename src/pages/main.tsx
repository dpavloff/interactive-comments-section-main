import React, { FC } from "react";
import CommentSection from "../components/comment-section/comment-section";
import ReplyForm from "../components/comment-form/comment-form";
import "./main.css";
import data from "../data/data";
import { Comment } from "../types/Comment";

const currentUser = data.currentUser;
const comments: Comment[] = data.comments;

const Main: FC = () => {
  return (
    <div className="main">
      <CommentSection comments={comments} />
      <ReplyForm />
    </div>
  );
};

export default Main;
