import React from "react";
import Image from "next/image";

type Props = {
  iconUrl: string;
  title: string;
};

const SidebarIcon: React.FC<Props> = ({ iconUrl, title }) => {
  return (
    <div className="relative flex-[0_0_32px] w-8 h-8">
      <Image fill sizes="100px" src={iconUrl} alt={title} />
    </div>
  );
};

export default SidebarIcon;
