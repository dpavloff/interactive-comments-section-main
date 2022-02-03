const { v4 } = require("uuid");

module.exports = class Comment {
  constructor({ id, content, createdAt, score, user, replies }) {
    super(props);
    this.id = id || v4();
    this.content = content;
    this.createdAt = createdAt || Date.now();
    this.score = score || 0;
    this.user = user;
    this.replies = replies || [];
  }

  toPublicJson() {
    return {
      id: this.id,
      content: this.content,
      createdAt: this.createdAt,
      score: this.score,
      user: this.user.toPublicJson(),
      replies: this.replies.toPublicJson(),
    };
  }
};
