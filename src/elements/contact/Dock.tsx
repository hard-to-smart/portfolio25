import React from "react";
import { buttonVariants } from "../../components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { cn } from "../../lib/utils";
import { Dock, DockIcon } from "../../components/magicui/dock";
import { Link } from "react-router-dom";
import { DATA } from "./data.tsx";

export function DockDemo() {
  return (
    <div className="flex flex-col items-center justify-center ">

      <TooltipProvider>
        <Dock direction="middle" className="gap-4">
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to={social.url}
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-14 rounded-full",
                    )}
                  >
                    <social.icon className="size-8" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
