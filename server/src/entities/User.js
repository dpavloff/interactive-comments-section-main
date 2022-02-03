const { v4 } = require("uuid");
const { faker } = require("@faker-js/faker");
const Image = require("./Image");

module.exports = class User {
  constructor({ id, username, image, comments, commentVotes }) {
    super(props);
    this.id = id || v4();
    this.username = username || faker.name.firstName() + faker.name.lastName();
    this.image = image || Image(this.id, `${this.id}.webp`, `${this.id}.png`);
    this.comments = comments || [];
    this.commentVotes = commentVotes || [];
  }

  toPublicJson() {
    return {
      id: this.id,
      username: this.username,
      image: this.image.toPublicJson(),
      comments: this.comments,
    };
  }
};
