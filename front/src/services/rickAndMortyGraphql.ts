import { makeGraphqlRequest } from "../utils/helper";

export const getCharacters = async (input: unknown) => {
  const query = `
    query($input: CharacterInput!) {
        getCharacters(input: $input) {
          id
          name
          species
          image
          status
          gender
        }
      }
    `;
  const result = await makeGraphqlRequest(query, { input });
  return result.data.getCharacters;
};

export const getCharacterById = async (id: number) => {
  const query = `
    query($getCharacterByIdId: Int!) {
      getCharacterById(id: $getCharacterByIdId) {
        id
        name
        species
        image
        status
        gender
      }
    }
  `;

  const result = await makeGraphqlRequest(query, { getCharacterByIdId: id });
  return result.data.getCharacterById;
};
