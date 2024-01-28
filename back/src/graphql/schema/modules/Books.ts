export const booksTypeDefs = `#graphql
    type Book {
        title: String
    author: String
  }
`;

export const booksQueries = `#graphql
    books: [Book]
`;

export const booksMutations = `#graphql
`;
