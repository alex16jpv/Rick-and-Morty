import SearchInput from "./SearchInput";
import SelectInput from "./SelectInput";

export function SearchFrom({ handleSubmit }: { handleSubmit: any }) {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    handleSubmit(data);
  };

  return (
    <form className="w-full p-3" onSubmit={handleOnSubmit}>
      <div className="flex flex-wrap mb-2 -mx-3"></div>
      <div className="flex flex-wrap gap-2 mb-2 -mx-3">
        <SearchInput name="name" />
        <SearchInput name="species" />
        <SelectInput name="gender">
          <option value="">All</option>
          <option value="FEMALE">Female</option>
          <option value="MALE">Male</option>
          <option value="GENDERLESS">Genderless</option>
          <option value="UNKNOWN">Unknown</option>
        </SelectInput>
        <SelectInput name="status">
          <option value="">All</option>
          <option value="ALIVE">Alive</option>
          <option value="DEAD">Dead</option>
          <option value="UNKNOWN">Unknown</option>
        </SelectInput>
        <button
          type="submit"
          className="text-gray-700 bg-gray-200 border border-gray-200 rounded"
        >
          🔍
        </button>
      </div>
    </form>
  );
}
