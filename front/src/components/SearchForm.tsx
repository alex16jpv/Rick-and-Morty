export function SearchFrom({ handleSubmit }) {
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
        <input
          type="search"
          name="name"
          placeholder="Search by Name"
          className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white md:w-auto"
        />
        <input
          type="search"
          name="species"
          placeholder="Search by Species"
          className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white md:w-auto"
        />
        <div className="relative">
          <select
            name="gender"
            className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="">All</option>
            <option value="FEMALE">Female</option>
            <option value="MALE">Male</option>
            <option value="GENDERLESS">Genderless</option>
            <option value="UNKNOWN">Unknown</option>
          </select>

          <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <select
            name="status"
            className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="">All</option>
            <option value="ALIVE">Alive</option>
            <option value="DEAD">Dead</option>
            <option value="UNKNOWN">Unknown</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
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
