import { useEffect, useState } from "react";
import { SearchFrom } from "./components/SearchForm";
import { getCharacters } from "./utils/helper";

function App() {
  const [filters, setFilters] = useState({ page: 1 });
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    console.log("useEffect", filters);

    getCharacters(filters).then((data) => {
      setCharacters(data);
    });
  }, [filters]);

  const handleSubmit = (formValues: any) => {
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
    <div className="max-w-3xl p-2 m-auto bg-red-300">
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

      <div className="flex flex-wrap justify-center">
        {characters?.map((character: any) => (
          <div
            key={character.id}
            className="flex flex-col items-center justify-center w-1/4 p-2 m-2 bg-white rounded-lg shadow-lg"
          >
            <img
              className="w-1/2 rounded-full"
              src={character.image}
              alt={character.name}
            />
            <h2 className="text-xl font-bold">{character.name}</h2>
            <p className="text-sm text-gray-500">{character.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
