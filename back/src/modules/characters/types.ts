export type CharacterType = {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  gender: string;
};

export type CharacterInput = {
  sort?: string;
  page: number;
  limit?: number;
  name?: string;
  status?: string;
  species?: string;
  gender?: string;
};
