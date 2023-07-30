"use client";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { TbTable } from "react-icons/tb";
import { Button } from "./ui/button";
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

const tables = [
  {
    name: "Users",
  },
];

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12 h-full", className)}>
      <div className="h-full space-y-4 py-4">
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Tables
          </h2>
          <ScrollArea className="h-full px-1">
            <div className="space-y-1 p-2">
              {tables?.map((table, i) => (
                <Button
                  key={`${table.name}-${i}`}
                  variant="ghost"
                  className="w-full justify-start font-normal"
                >
                  <TbTable className="mr-2" />
                  {table.name}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
