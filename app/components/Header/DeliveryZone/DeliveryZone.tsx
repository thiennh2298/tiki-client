import { Button } from "@shadcn-ui/button";
import React from "react";
import { GrLocation } from "react-icons/gr";

const DeliveryZone = () => {
  return (
    <div>
      <Button
        variant="ghost"
        size="icon"
        className="h-max w-auto py-1 gap-1 hover:bg-inherit text-secondary"
      >
        <GrLocation fontSize={18} />
        <p>Giao đến:</p>
        <p className="underline text-black">
          Q. Bình Thạnh, P. 26, Hồ Chí Minh
        </p>
      </Button>
    </div>
  );
};

export default DeliveryZone;
