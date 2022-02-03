module.exports = class Image {
  constructor({ id, webpFilename, pngFilename }) {
    super(props);
    this.id = id;
    this.webpFilename = webpFilename;
    this.pngFilename = pngFilename;
  }

  toPublicJson() {
    return {
      id: this.id,
      webpFilename: this.webpFilename,
      pngFilename: this.pngFilename,
    };
  }
};
