import { cn } from "@shadcn-lib";
import { Button } from "@shadcn-ui/button";
import { Input } from "@shadcn-ui/input";
import React from "react";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const Search = () => {
  return (
    <div className="h-10 flex items-center border border-secondary-foreground rounded-lg">
      <Button
        variant="outline"
        size="icon"
        className="border-0 h-full w-max pl-4 shadow-none hover:bg-white"
      >
        <MagnifyingGlassIcon className="w-5 h-5 text-secondary" />
      </Button>
      <Input
        className={cn(
          "h-full text-sm ",
          "border-0 outline-none outline-0 outline-offset-0 shadow-none ring-0 focus-visible:ring-0"
        )}
        placeholder="100% Hàng tuyển chọn"
      />
      <Button
        variant="ghost"
        className={cn(
          "before:content-[''] before:absolute before:top-2 before:bottom-2 before:left-0 before:w-[1px] before:bg-secondary-foreground",
          "border-0 rounded-l-none rouned-r-lg text-primary hover:bg-primary-foreground",
          "relative h-full font-normal text-primary hover:text-primary"
        )}
      >
        Tìm kiếm
      </Button>
    </div>
  );
};

export default Search;
