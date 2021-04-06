import { gql } from '@apollo/client';

export const typeDefs = gql`
  extend type Mortgage {
    id: ID
    bankName: String
    monthly: Float
    rateType: String
    total: Float
    initial: Float
    follow: Float
    aprc: Float
    cost: Float
  }

`;

export const resolvers = {
  Mutation: {
  },
};

export default resolvers;
