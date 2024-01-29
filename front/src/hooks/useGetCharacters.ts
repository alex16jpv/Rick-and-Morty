import { useEffect, useState } from "react";
import { getCharacters } from "../services/rickAndMortyGraphql";

export default function useGetCharacters() {
  const [filters, setFilters] = useState({ page: 1 });
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters(filters).then((data) => {
      setCharacters(data);
    });
  }, [filters]);

  return {
    characters,
    setFilters,
  };
}
