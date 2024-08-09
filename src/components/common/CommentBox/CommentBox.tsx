import React, { useState } from "react";
import classes from "./CommentBox.module.css";

interface CommentBoxProps {
  onSubmit?: (comment: string) => void;
}

interface Comment {
  author: string;
  content: string;
}

export const CommentBox: React.FC<CommentBoxProps> = ({ onSubmit }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      if (onSubmit) onSubmit(comment);
      setComments([...comments, { author: "사람", content: comment }]);
      setComment("");
    }
  };

  return (
    <div className={classes.commentBox}>
      <h3 className={classes.commentTitle}>댓글</h3>
      <form onSubmit={handleSubmit}>
        <div className={classes.textareaContainer}>
          <textarea
            className={classes.textarea}
            value={comment}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="정책 위반 댓글은 삭제될 수 있습니다."
          />
          <div className={classes.verticalDivider}></div>
          <button type="submit" className={classes.button}>
            작성
          </button>
        </div>
      </form>
      <div className={classes.divider}></div>
      <div className={classes.commentsList}>
        {comments.map((comment, index) => (
          <div key={index} className={classes.commentItem}>
            <div className={classes.commentAuthor}>사람{index + 1}</div>
            <div className={classes.commentContent}>{comment.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
