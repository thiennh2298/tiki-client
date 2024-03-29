import React from "react";
import TikiSeller from "./TikiSeller";
import Categories from "./Categories";
import Highlights from "./Highlights";
import styles from "./styles.module.css";
import clsx from "clsx";

const Sidebar = () => {
  return (
    <div
      className={clsx(
        "h-full max-h-screen pb-28 flex flex-col gap-4 rounded-lg overflow-y-scroll",
        styles.scrollbar
      )}
    >
      <Categories />
      <Highlights />
      <TikiSeller />
    </div>
  );
};

export default Sidebar;
