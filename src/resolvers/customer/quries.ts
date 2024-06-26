import {
  AddressQueryArgsType,
  ContextObjectType,
  RefreshQueryArgsType,
  TokenQueryArgsType,
  UserQueryArgsType,
  VerifyInvitationQueryArgsType,
} from "@types";
import {
  getToken,
  getUserInfo,
  getRefreshToken,
  getVerifiedStaffInfo,
  getCurrentUserInfo,
  getCurrentUserAddresses,
  getAddressInfo,
} from "@services/customerService";

export const resolverQuries = {
  Query: {
    me: async (_: unknown, __: unknown, context: ContextObjectType) =>
      await getCurrentUserInfo(context),

    user: async (_: unknown, args: UserQueryArgsType) =>
      await getUserInfo(args),

    verifyInvitation: async (_: unknown, args: VerifyInvitationQueryArgsType) =>
      await getVerifiedStaffInfo(args),

    token: async (_: unknown, args: TokenQueryArgsType) => await getToken(args),

    refresh: async (_: unknown, args: RefreshQueryArgsType) =>
      await getRefreshToken(args),

    address: async (_: unknown, args: AddressQueryArgsType) =>
      await getAddressInfo(args),
  },
  User: {
    addresses: async (_: unknown, __: unknown, context: ContextObjectType) =>
      await getCurrentUserAddresses(context),
  },
};
