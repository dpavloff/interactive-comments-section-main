const { create } = require("domain");
const { v4 } = require("uuid");

module.exports = class Reply {
  constructor({ id, content, createdAt, score, user, replyingTo }) {
    this.id = id || v4;
    this.content = content;
    this.createdAt = createdAt || Date.now();
    this.score = score || 0;
    this.user = user;
    this.replyingTo = replyingTo;
  }

  toPublicJson() {
    return {
      id: this.id,
      content: this.content,
      createdAt: this.createdAt,
      score: this.score,
      user: this.user.toPublicJson(),
      replyingTo: this.replyingTo,
    };
  }
};
