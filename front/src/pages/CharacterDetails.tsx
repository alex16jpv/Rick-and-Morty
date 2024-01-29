import TextInput from "../components/TextInput";
import { useDetails } from "../hooks/useDetails";

const aliveColor = "text-green-500";
const deadColor = "text-red-500";
const unknownColor = "text-gray-500";

const statusColors: { [status: string]: string } = {
  Alive: aliveColor,
  Dead: deadColor,
  unknown: unknownColor,
};

export default function CharacterDetails() {
  const {
    character,
    comment,
    comments,
    handleChangeComment,
    handleSubmitComment,
  } = useDetails();
  return (
    <main className="flex w-screen min-h-screen place-content-center place-items-center">
      <section className="w-full max-w-3xl p-4 bg-white shadow-2xl rounded-xl">
        <div className="flex gap-10 py-4 border-b border-solid">
          <img
            src={character.image}
            alt={character.name}
            className="border rounded-full aspect-square"
          />
          <article className="text-3xl">
            <h1 className="mb-4 text-6xl underline">{character.name}</h1>
            <p>
              Species:{" "}
              <span className="text-gray-500">{character.species}</span>
            </p>
            <p>
              Gender: <span className="text-gray-500">{character.gender}</span>
            </p>
            <p>
              Status:{" "}
              <span className={statusColors[character.status]}>
                {character.status}
              </span>
            </p>
          </article>
        </div>
        <section className="mt-4">
          <form onSubmit={handleSubmitComment} className="flex gap-2">
            <TextInput
              name="comment"
              placeholder="Add comment"
              value={comment}
              onChange={handleChangeComment}
            />
            <button
              type="submit"
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white md:w-auto"
            >
              Send
            </button>
          </form>

          {comments?.map((comment) => (
            <p key={comment.id} className="p-4 mt-3 bg-gray-100 rounded-md">
              {comment.comment}
            </p>
          ))}
        </section>
      </section>
    </main>
  );
}
