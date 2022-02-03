import React from "react";
import { connect } from "react-redux";

import { RootState } from "../../redux/store";
import "./reply-form.css";

interface IReplyFormProps {
  webp: string;
  png: string;
  reciever: string;
  threadID: number;
}

const ReplyForm: React.FC<IReplyFormProps> = ({
  webp,
  png,
  reciever,
  threadID,
}) => {
  const [replyText, setReplyText] = React.useState("");
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

  const handleReplySend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="reply-form" onSubmit={handleReplySend}>
      <div className="user-avatar">
        <picture>
          <source srcSet={webp} width={42} height={42} />
          <img src={png} width={42} height={42} alt="your avatar" />
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
        value={"REPLY"}
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
