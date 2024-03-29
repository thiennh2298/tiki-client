import Link from "next/link";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  href: string;
};

const Keyword: React.FC<Props> = ({ href, children }) => {
  return <Link href={href}>{children}</Link>;
};

export default Keyword;
