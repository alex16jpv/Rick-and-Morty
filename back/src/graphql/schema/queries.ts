import { booksQueries } from "./modules/Books";
import { charactersQueries } from "./modules/Characters";

export default `#graphql
    ${booksQueries}
    ${charactersQueries}
`;
