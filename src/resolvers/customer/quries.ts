import { ContextObjectType, UserQueryArgsType } from "@types";
import { getUserInfo } from "@services/customerService";

export const resolverQuries = {
  Query: {
    user: async (
      _: unknown,
      args: UserQueryArgsType,
      context: ContextObjectType
    ) => await getUserInfo(args, context),
  },
};
