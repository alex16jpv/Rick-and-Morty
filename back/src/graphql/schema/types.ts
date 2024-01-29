import { booksTypeDefs } from "./modules/Books";
import { charactersTypeDef } from "./modules/Characters";

export default `#graphql
    scalar JSON

    ${booksTypeDefs}
    ${charactersTypeDef}
`;
