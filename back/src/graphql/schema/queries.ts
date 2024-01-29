import { charactersQueries } from "./modules/Characters";
import { commentsQueries } from "./modules/Comments";

export default `#graphql
    ${charactersQueries}
    ${commentsQueries}
`;
