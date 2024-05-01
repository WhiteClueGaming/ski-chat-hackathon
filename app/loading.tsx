import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed flex flex-col items-center justify-center z-50 top-0 left-0 w-full h-full bg-[#313338]">
      <Loader2 className="h-[3.5rem] w-[3.5rem] text-zinc-500 animate-spin my-4" />
      <p className="text-2xl text-zinc-500 dark:text-zinc-400">Setting Up</p>
    </div>
  );
}
