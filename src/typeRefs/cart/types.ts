import { gql } from "apollo-server-express";

export const CartDefs = gql`
  type Cart {
    _id: ID
    userId: String
    lines: [LineItem]
    price: CartPrice
    status: String
    isAnonymous: Boolean
    createdAt: String
    updatedAt: String
    isActive: Boolean
    createdBy: String
    updatedBy: String
    metaStatus: String
    customerInfo: User
  }

  type LineItem {
    quantity: Int
    product: Product
    adjustments: String
  }

  type CartPrice {
    gross: Int
    net: Int
    tax: Int
    discounts: Int
    shipping: Int
    total: Int
  }
  # =============== Inputs =================
  input AddToCartInput {
    lineIds: [String]
  }
`;