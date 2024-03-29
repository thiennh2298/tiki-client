import Link from "next/link";
import React from "react";
import SidebarIcon from "./SidebarIcon";

type Props = {
  url?: string;
  iconUrl: string;
  content: string;
};

const SidebarItem: React.FC<Props> = ({ url, iconUrl, content }) => {
  return (
    <div className="w-full flex items-center gap-2 py-[7px] px-4 rounded-lg hover:bg-accent cursor-pointer">
      <SidebarIcon iconUrl={iconUrl} title={content} />
      <p className="text-sm text-charcoal">{content}</p>
    </div>
  );
};

export default SidebarItem;
