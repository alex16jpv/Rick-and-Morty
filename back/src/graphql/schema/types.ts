import { charactersTypeDef } from "./modules/Characters";
import { commentsTypeDef } from "./modules/Comments";

export default `#graphql
    scalar JSON

    ${charactersTypeDef}
    ${commentsTypeDef}
`;
