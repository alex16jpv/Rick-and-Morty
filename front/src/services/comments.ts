import { makeGraphqlRequest } from "../utils/helper";

export const createComment = async (input: unknown) => {
  const query = `
    mutation($input: CommentInput!) {
        createComment(input: $input) {
          id
          comment
        }
      }
    `;

  const result = await makeGraphqlRequest(query, { input });
  return result?.data?.createComment;
};

export const getComments = async (id: number) => {
  const query = `
      query($input: CommentInput!) {
        getComments(input: $input) {
          id
          comment
        }
      }
    `;

  const result = await makeGraphqlRequest(query, { input: { id } });
  return result?.data?.getComments;
};
