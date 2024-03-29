import { cn } from "@shadcn-lib";
import { Button } from "@shadcn-ui/button";
import Link from "next/link";
import React, { PropsWithChildren } from "react";
import { ClassNameValue } from "tailwind-merge";

type Props = PropsWithChildren & {
  url?: string;
  className?: string;
};

const NavItem: React.FC<Props> = ({ url, children, className }) => {
  const content = (
    <Button
      variant={url ? "link" : "ghost"}
      className={cn("h-10 px-4 py-2", className)}
    >
      {children}
    </Button>
  );

  return url ? <Link href={url}>{content}</Link> : content;
};

export default NavItem;
