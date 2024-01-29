import Comments from "../../../modules/comments";

const comments = new Comments();

export const createComment = async (
  _,
  params: { input: { id: number; comment: string } }
) => {
  return await comments.createComment(params.input);
};
