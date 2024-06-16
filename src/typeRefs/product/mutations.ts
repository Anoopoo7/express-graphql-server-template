import { gql } from "apollo-server-express";

export const ProductMutations = gql`
  type Mutation {
    productCreate(productCreateInput: ProductCreateInput): Product
    productUpdate(_id: ID!, productUpdateInput: ProductUpdateInput): Product
  }
`;
