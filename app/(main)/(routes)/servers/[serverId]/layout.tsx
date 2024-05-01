import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import React from "react";
import { redirect } from "next/navigation";
import { ServerSidebar } from "@/components/server/server-sidebar";
import { ServerMembersSidebar } from "@/components/server/server-members";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const ServerIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { serverId: string };
}) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  const server = await db.server.findUnique({
    where: {
      id: params.serverId,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (!server) {
    return redirect("/");
  }

  return (
    <div className="w-full h-full flex">
      <ResizablePanelGroup className="w-full h-full" direction="horizontal">
        <ResizablePanel className="hidden md:flex relative overflow-hidden" defaultSize={20}>
          <div className="hidden md:flex h-full w-full z-20 flex-col">
            <ServerSidebar serverId={params.serverId} />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle/>
        <ResizablePanel>
          <main className="h-full md:pr-60 w-full">{children}</main>

          <ServerMembersSidebar serverId={params.serverId} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default ServerIdLayout;
