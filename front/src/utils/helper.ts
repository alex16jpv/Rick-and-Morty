export const getCharacters = async (input: unknown) => {
  const response = await fetch("http://localhost:4000/", {
    body: JSON.stringify({
      variables: { input },
      query: `
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
        `,
    }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.data.getCharacters;
};

export const getCharacterById = async (id: number) => {
  const response = await fetch("http://localhost:4000/", {
    body: JSON.stringify({
      query: `
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
      `,
      variables: { getCharacterByIdId: id },
    }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.data.getCharacterById;
};
