import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";

export const getServer = async (serverId: string) => {
  if (!serverId) {
    return null;
  }

  const serverData = await db.server.findUnique({
    where: {
      id: serverId,
    },
    include: {
      channels: {
        orderBy: {
          createdAt: "asc",
        },
      },
      members: {
        include: {
          profile: true,
        },
        orderBy: {
          role: "asc",
        },
      },
    },
  });

  return serverData;
};
