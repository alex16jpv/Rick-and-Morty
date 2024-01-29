export const charactersTypeDef = `#graphql
    type CharacterType {
        id: Int
        name: String
        image: String
        species: String
        status: String
        gender: String
    }

`;

export const characterInput = `#graphql
    enum CharacterSort {
        NAME_ASC
        NAME_DESC
    }

    enum CharacterStatus {
        ALIVE
        DEAD
        UNKNOWN
    }

    enum CharacterGender {
        FEMALE
        MALE
        GENDERLESS
        UNKNOWN
    }

    input CharacterInput {
        page: Int!
        limit: Int
        sort: CharacterSort
        gender: CharacterGender
        name: String
        species: String
        status: CharacterStatus
    }
`;

export const charactersQueries = `#graphql
    getCharacters(input: CharacterInput!): [CharacterType]
`;
