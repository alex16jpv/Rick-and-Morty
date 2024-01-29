import CharactersClass from "../../../modules/characters";
import { CharacterInput } from "../../../modules/characters/types";

const Characters = new CharactersClass();

export const getCharacters = async (_, params: { input: CharacterInput }) => {
  const characters = await Characters.getCharacters(params.input);
  return characters;
};
