import charactersMock from "./mocks/characters";
import { CharacterInput, CharacterType } from "./types";

export default class Characters {
  async getCharacters({
    page,
    limit,
    sort,
  }: CharacterInput): Promise<CharacterType[]> {
    // TODO: implement fetch to get the characters
    const characters = charactersMock?.results?.map((character) => {
      return {
        id: character.id,
        name: character.name,
        image: character.image,
        specie: character.species,
      };
    });

    let sortedCharacters = characters;
    if (sort === "NAME_ASC") {
      sortedCharacters = characters.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else if (sort === "NAME_DESC") {
      sortedCharacters = characters.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }

    return sortedCharacters.slice(0, limit);
  }
}
