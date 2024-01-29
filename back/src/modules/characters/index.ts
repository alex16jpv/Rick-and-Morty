// import charactersMock from "./mocks/characters";
import { CharacterInput, CharacterType } from "./types";

export default class Characters {
  async getCharacterById(id: number): Promise<CharacterType> {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching character");
    }

    const data: any = await response.json();

    return data;
  }

  async getCharacters({
    page,
    limit,
    sort,
    gender,
    name,
    species,
    status,
  }: CharacterInput): Promise<CharacterType[]> {
    let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const searchParams = [];
    if (gender) {
      searchParams.push(`gender=${gender.toLowerCase()}`);
    }

    if (name) {
      searchParams.push(`name=${name}`);
    }

    if (species) {
      searchParams.push(`species=${species}`);
    }

    if (status) {
      searchParams.push(`status=${status.toLowerCase()}`);
    }

    if (searchParams.length > 0) {
      url = `${url}&${searchParams.join("&")}`;
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error fetching characters");
    }

    const data: any = await response.json();

    const characters = data?.results?.map((character): CharacterType => {
      return {
        id: character.id,
        name: character.name,
        image: character.image,
        species: character.species,
        status: character.status,
        gender: character.gender,
      };
    });

    let sortedCharacters = characters;
    if (sortedCharacters?.length <= 0) {
      return [];
    }

    if (sort === "NAME_ASC") {
      sortedCharacters = characters.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else if (sort === "NAME_DESC") {
      sortedCharacters = characters.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }

    return sortedCharacters?.slice(0, limit);
  }
}
