export default class Comments {
  comments: any[];
  constructor() {
    this.comments = [];
  }

  async getComments(params) {
    return this.comments;
  }

  async createComment(params) {
    console.log(params);

    this.comments.push(params);
    return this.comments;
  }
}
