import types from "./types";
import queries from "./queries";
import mutations from "./mutations";

const typeDefs = `#graphql
    ${types}

    type Query {
        ${queries}
    }

    type Mutation {
        ${mutations}
    }
`;

export default typeDefs;
