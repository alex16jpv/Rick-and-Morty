import { useEffect, useState } from "react";
import { SearchFrom } from "./components/SearchForm";
import { getCharacters } from "./services/rickAndMortyGraphql";
import { CharacterType } from "./utils/types";

function App() {
  const [filters, setFilters] = useState({ page: 1 });
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    console.log("useEffect", filters);

    getCharacters(filters).then((data) => {
      setCharacters(data);
    });
  }, [filters]);

  const handleSubmit = (formValues: CharacterType) => {
    console.log("handleSubmit", formValues);
    setFilters((prev) => {
      return {
        ...prev,
        status: formValues.status || null,
        gender: formValues.gender || null,
        name: formValues.name || null,
        species: formValues.species || null,
      };
    });
  };

  return (
    <div className="max-w-3xl p-2 m-auto">
      <h1 className="my-2 text-4xl font-extrabold text-center">
        Rick and Morty
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        excepturi velit fuga. Optio expedita temporibus vero similique officiis
        totam mollitia ratione, at dolorum itaque, pariatur qui neque, delectus
        eaque quis.
      </p>

      <SearchFrom handleSubmit={handleSubmit} />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2">
        {characters?.map((character: CharacterType) => (
          <div
            key={character.id}
            className="flex w-full p-3 bg-white border-b-2 border-blue-700 rounded-md shadow-xl gap-y-3 gap-x-6"
          >
            <img
              className="w-1/3 rounded-full aspect-square"
              src={character.image}
              alt={character.name}
            />
            <div>
              <a href={`/character-details/${character.id}`}>
                <h2 className="text-2xl font-bold underline">
                  {character.name}
                </h2>
              </a>
              <p className="text-sm text-gray-500">{character.species}</p>
              <p className="text-sm text-gray-500">{character.gender}</p>

              {character.status === "Alive" && (
                <p className="text-sm text-green-500">{character.status}</p>
              )}

              {character.status === "Dead" && (
                <p className="text-sm text-red-500">{character.status}</p>
              )}

              {character.status === "unknown" && (
                <p className="text-sm text-gray-500">{character.status}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
