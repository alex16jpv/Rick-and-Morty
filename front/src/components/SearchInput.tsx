export default function SearchInput({ name }: { name: string }) {
  return (
    <input
      type="search"
      name={name}
      placeholder={`Search by ${name}`}
      className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white md:w-auto"
    />
  );
}
