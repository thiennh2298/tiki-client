import React from "react";
import Image from "next/image";

const MainLogo = () => {
  return (
    <picture>
      <Image
        src={"/images/tiki-logo.png"}
        width={96}
        height={40}
        sizes="96px"
        alt="Tiki logo"
        priority
      />
    </picture>
  );
};

export default MainLogo;
