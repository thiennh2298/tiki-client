import React, { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return <div className="main-container">{children}</div>;
};

export default Container;
