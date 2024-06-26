import { Request } from "express";
import { ContextObjectType, SystemConfigsType, UserType } from "@types";
import { getUserByIdOrEmail } from "@repositories/userRepository";
import { getSystemConfigurations } from "@repositories/organizationRepository";
import { verifyAuthenticationToken } from "@services/authenticationService";
import pubsub from "@core/pubSub";

const configurations = async (role: string) => {
  const systemConfigurations: SystemConfigsType = await getSystemConfigurations(
    "PERMISSIONS_OF_ROLES"
  );

  if (systemConfigurations && systemConfigurations.isActive) {
    return systemConfigurations.defaultConfigurations?.[role] as string[];
  }

  throw Error("Invalid role");
};

export default async function userContext({
  req,
}: {
  req: Request;
}): Promise<ContextObjectType> {
  const { headers } = req || {};

  const { authorization } = headers || {};

  if (authorization) {
    const token = authorization?.split(" ")?.[1];
    const userId = verifyAuthenticationToken(token);
    if (userId) {
      const user: UserType = await getUserByIdOrEmail(userId, "", true);
      if (user) {
        const userPermissions = await configurations(user.role);
        return {
          _id: user._id,
          email: user.email,
          isActive: user.isActive,
          firstName: user.firstName,
          lastName: user.lastName,
          lastOnline: user.lastOnline,
          loginType: user.loginType,
          phone: user.phone,
          role: user.role,
          permissions: userPermissions,
          pubsub,
          isAnonymous: false,
        };
      }
      return { _id: userId, isAnonymous: true, pubsub } as ContextObjectType;
    }
  }
  return { pubsub } as ContextObjectType;
}
