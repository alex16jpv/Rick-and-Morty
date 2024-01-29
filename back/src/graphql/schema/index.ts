import types from "./types";
import queries from "./queries";
import mutations from "./mutations";
import inputs from "./inputs";

const typeDefs = `#graphql
    ${types}
    ${inputs}

    type Query {
        ${queries}
    }

    type Mutation {
        ${mutations}
    }
`;

export default typeDefs;
