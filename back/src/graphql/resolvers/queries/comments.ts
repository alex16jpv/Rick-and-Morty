import Comments from "../../../modules/comments";

const comments = new Comments();

export const getComments = async (_, params: { input: { id: number } }) => {
  return await comments.getComments(params.input);
};
