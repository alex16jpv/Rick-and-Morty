import SearchInput from "./SearchInput";
import SelectInput from "./SelectInput";

export function SearchFrom({ handleSubmit }: { handleSubmit: any }) {
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    handleSubmit(data);
  };

  return (
    <form className="w-full px-3 py-3 md:px-0" onSubmit={handleOnSubmit}>
      <div className="flex flex-wrap mb-2 -mx-3 gap-x-2 gap-y-2 place-items-center place-content-center">
        <SearchInput name="name" />
        <SearchInput name="species" />
        <SelectInput name="gender">
          <option value="">All Genders</option>
          <option value="FEMALE">Female</option>
          <option value="MALE">Male</option>
          <option value="GENDERLESS">Genderless</option>
          <option value="UNKNOWN">Unknown</option>
        </SelectInput>
        <SelectInput name="status">
          <option value="">All Status</option>
          <option value="ALIVE">Alive</option>
          <option value="DEAD">Dead</option>
          <option value="UNKNOWN">Unknown</option>
        </SelectInput>
        <button
          type="submit"
          className="block px-4 py-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white md:w-auto"
        >
          🔍
        </button>
      </div>
    </form>
  );
}
