import { cn } from "@shadcn-lib";
import { Button } from "@shadcn-ui/button";
import React from "react";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import Badge from "./Badge";

type Props = {
  className?: string;
};

const Carts: React.FC<Props> = ({ className }) => {
  return (
    <Button
      className={cn(
        "relative w-10 h-10 border-0 shadow-none text-secondary hover:text-primary",
        className
      )}
      variant="outline"
      size="icon"
    >
      <PiShoppingCartSimpleBold fontSize={24} className="text-inherit" />
      <Badge className="absolute right-0 -top-1" />
    </Button>
  );
};

export default Carts;
