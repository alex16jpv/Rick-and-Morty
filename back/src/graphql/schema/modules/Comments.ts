export const commentsTypeDef = `#graphql
    type CommentType {
        id: Int!
        comment: String!
        createdAt: String!
    }
`;

export const commentInput = `#graphql
    input CommentInput {
        id: Int!
        comment: String!
    }
`;

export const commentsQueries = `#graphql
    getComments(input: CommentInput!): [CommentType]
`;

export const commentsMutations = `#graphql
    createComment(input: CommentInput!): CommentType
`;
