import { CartType, LineItemType, OrderStatusTypes } from "@core/types";
import Cart from "@schemas/OrderSchema";

const createCart = async (cart: Partial<CartType>) => {
  return await new Cart(cart).save();
};

const getCartByUserIdAndStatus = async (
  userId: string,
  statuses: OrderStatusTypes[]
) => {
  return (await Cart.findOne({
    userId,
    status: { $in: statuses },
  })) as CartType;
};

export const addNewProductCart = async (
  orderId: string,
  newLineItem: LineItemType,
  data: Partial<CartType>
) => {
  return await Cart.findOneAndUpdate(
    { _id: orderId },
    { $push: { lines: newLineItem }, ...data },
    { new: true }
  );
};

export const updateOldProductCart = async (
  orderId: string,
  lineItem: LineItemType,
  data: Partial<CartType>
) => {
  return await Cart.findOneAndUpdate(
    { _id: orderId, "lines.productId": lineItem?.productId },
    { $set: { "lines.$": lineItem, ...data } },
    { new: true }
  );
};

export default {
  createCart,
  getCartByUserIdAndStatus,
  addNewProductCart,
  updateOldProductCart,
};
