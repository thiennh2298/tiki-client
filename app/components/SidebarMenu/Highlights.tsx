import React from "react";
import SidebarGroup from "./_components/SidebarGroup";
import { highlights } from "./_components/data";
import SidebarItem from "./_components/SidebarItem";

const Highlights = () => {
  return (
    <SidebarGroup title="Nổi bật">
      {highlights.map((highlight) => (
        <SidebarItem key={highlight.id} {...highlight} />
      ))}
    </SidebarGroup>
  );
};

export default Highlights;
