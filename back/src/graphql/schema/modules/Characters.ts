export const charactersTypeDef = `#graphql
    type CharacterType {
        name: String
        image: String
        specie: String
    }

`;

export const characterInput = `#graphql
    enum CharacterSort {
        NAME_ASC
        NAME_DESC
    }

    input CharacterInput {
        page: Int!
        limit: Int
        sort: CharacterSort
    }
`;

export const charactersQueries = `#graphql
    getCharacters(input: CharacterInput!): [CharacterType]
`;
