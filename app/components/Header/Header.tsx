import MainLogo from "./MainLogo";
import React from "react";
import Search from "./Search";
import Navigations from "./Navigations";
import Carts from "./Carts";
import Keywords from "./Keywords";
import DeliveryZone from "./DeliveryZone";

const Header = () => {
  return (
    <header className="main-header py-2 px-6 border flex flex-row gap-12">
      <div>
        <MainLogo />
        <h3 className="mt-2 text-sm font-semibold text-primary">Tốt & Nhanh</h3>
      </div>

      <div className="flex-[1_0_0] flex flex-col gap-2 border">
        <div className="flex flex-row">
          <div className="flex-1">
            <Search />
          </div>

          <div className="ml-12 flex flex-row">
            <Navigations />
            <Carts />
          </div>
        </div>
        <div className="flex flex-row">
          <Keywords />
          <DeliveryZone />
        </div>
      </div>
    </header>
  );
};

export default Header;
