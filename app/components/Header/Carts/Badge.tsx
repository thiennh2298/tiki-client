import { cn } from "@shadcn-lib";
import React from "react";

type Props = {
  className?: string;
};

const Badge: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "w-[14.88px] h-4 flex-center rounded-full bg-red-500",
        className
      )}
    >
      <p className="text-white font-bold text-[10px]">0</p>
    </div>
  );
};

export default Badge;
