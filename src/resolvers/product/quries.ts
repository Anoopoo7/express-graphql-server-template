import { ProductArgsType, ProductListArgsType, ProductType } from "@core/types";
import {
  getProductById,
  getVariantInfo,
  getProductList,
  getProductPriceInfo,
  findProductAvailableStocks,
} from "@services/productService";

export const resolverQuries = {
  Query: {
    product: async (_: unknown, args: ProductArgsType) =>
      await getProductById(args),

    productList: async (_: unknown, args: ProductListArgsType) => {
      return await getProductList(args);
    },
  },
  Product: {
    variants: async (product: ProductType) => await getVariantInfo(product),
    price: async (product: ProductType) => await getProductPriceInfo(product),
    availableStocks: async (product: ProductType) =>
      await findProductAvailableStocks(product),
  },
};
