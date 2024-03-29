import React from "react";
import SidebarItem from "./_components/SidebarItem";
import { categories } from "./_components/data";
import SidebarGroup from "./_components/SidebarGroup";

const Categories = () => {
  return (
    <SidebarGroup title="Danh mục">
      {categories.map((category) => (
        <SidebarItem key={category.id} {...category} />
      ))}
    </SidebarGroup>
  );
};

export default Categories;
