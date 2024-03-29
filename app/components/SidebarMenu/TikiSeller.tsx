import React from "react";
import SidebarGroup from "./_components/SidebarGroup";
import SidebarItem from "./_components/SidebarItem";
import { sellers } from "./_components/data";

const TikiSeller = () => {
  return (
    <SidebarGroup>
      {sellers.map((seller) => (
        <SidebarItem key={seller.id} {...seller} />
      ))}
    </SidebarGroup>
  );
};

export default TikiSeller;
