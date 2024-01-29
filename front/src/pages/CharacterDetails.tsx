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
      <section className="flex w-full max-w-3xl gap-10 p-4 bg-white border rounded-sm shadow-2xl">
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
      </section>
      <section>
        <form onSubmit={handleSubmitComment}>
          <input type="text" value={comment} onChange={handleChangeComment} />
          <button type="submit">Send</button>
        </form>

        {comments?.map((comment) => (
          <p key={comment.id}>{comment.comment}</p>
        ))}
      </section>
    </main>
  );
}
