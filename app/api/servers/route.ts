import { v4 as uuidv4 } from "uuid";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { MemberRole } from "@prisma/client";
import { generateSnowflake } from "@/app/utils/snowflake";
import generateInvite from "@/app/utils/generate-invite";

export async function POST(req: Request) {
  try {
    const { name, imageUrl } = await req.json();

    const profile = await currentProfile();

    if (!profile) return new NextResponse("Unauthorized", { status: 401 });

    const server = await db.server.create({
      data: {
        id: generateSnowflake(),
        profileId: profile.id,
        name,
        imageUrl,
        inviteCode: generateInvite(),
        channels: {
          create: [{ id: generateSnowflake(), name: "general", profileId: profile.id }],
        },
        members: {
          create: [{ id: generateSnowflake(), profileId: profile.id, role: MemberRole.ADMIN }],
        },
      },
    });

    return NextResponse.json(server);
  } catch (error) {
    console.error("[SERVERS_POST]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
