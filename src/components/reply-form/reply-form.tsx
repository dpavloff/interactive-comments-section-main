import React, { Component, FC } from "react";
import { connect } from "react-redux";

import { RootState, store } from "../../redux/store";
import "./reply-form.css";

interface IReplyFormProps {
  webp: string;
  png: string;
  reciever: string;
}

const ReplyForm: FC<IReplyFormProps> = ({ webp, png, reciever }) => {
  const [replyText, setReplyText] = React.useState("@" + reciever);
  const textAreaRef = React.useRef<any>();

  React.useEffect(() => {
    textAreaRef.current.style.height = "0px";
    const scrollHeight = textAreaRef.current.scrollHeight;
    textAreaRef.current.style.height =
      scrollHeight > 500 ? "500px" : scrollHeight + "px";
  }, [replyText]);

  const handleReplyTextChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setReplyText(e.currentTarget.value);
  };

  return (
    <form className="reply-form">
      <div className="user-avatar">
        <picture>
          <source srcSet={webp} width={42} height={42} />
          <img src={png} width={42} height={42} />
        </picture>
      </div>
      <textarea
        className="reply-text-box"
        ref={textAreaRef}
        value={replyText}
        onInput={handleReplyTextChange}
      />
      <input
        type={"submit"}
        name="Reply"
        value={"Reply"}
        className="reply-text-box-button"
      />
    </form>
  );
};

const mapStateToProps = (state: RootState) => ({
  webp: state.currentUser.image.webp,
  png: state.currentUser.image.png,
});

export default connect(mapStateToProps)(ReplyForm);
