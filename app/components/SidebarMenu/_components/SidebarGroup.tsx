import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  title?: string;
};

const SidebarGroup: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="py-3 px-2 bg-white rounded-lg">
      {title && (
        <h3 className="mb-2 pl-4 text-sm font-bold leading-normal text-charcoal">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};

export default SidebarGroup;
