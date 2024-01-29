import { useDetails } from "../hooks/useDetails";

export default function CharacterDetails() {
  const {
    character,
    comment,
    comments,
    handleChangeComment,
    handleSubmitComment,
  } = useDetails();
  return (
    <main className="flex w-screen h-screen bg-gray-100 place-content-center place-items-center">
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
              Species: <span className="text-red-300">{character.species}</span>
            </p>
            <p>
              Status: <span className="text-red-300">{character.status}</span>
            </p>
            <p>
              Gender: <span className="text-red-300">{character.gender}</span>
            </p>
          </article>
        </div>
        <section className="mt-4">
          <form onSubmit={handleSubmitComment}>
            <input type="text" value={comment} onChange={handleChangeComment} />
            <button type="submit">Send</button>
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
