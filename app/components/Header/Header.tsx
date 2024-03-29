import MainLogo from "./MainLogo";
import React from "react";
import Search from "./Search";
import Navigations from "./Navigations";
import Carts from "./Carts";
import Keywords from "./Keywords";
import DeliveryZone from "./DeliveryZone";
import clsx from "clsx";
import Container from "@components/Container";

const Header = () => {
  return (
    <header className="bg-white">
      <Container>
        <div className="main-header py-2 flex flex-row gap-12">
          <div>
            <MainLogo />
            <h3 className="mt-2 text-sm font-semibold text-primary">
              Tốt & Nhanh
            </h3>
          </div>

          <div className="flex-[1_0_0] flex flex-col gap-2">
            <div className="flex flex-row">
              <div className="flex-1">
                <Search />
              </div>

              <div className="ml-12 flex flex-row">
                <Navigations />
                <div
                  className={clsx(
                    "ml-6 relative flex items-center",
                    "before:content-[''] before:w-[2px] before:h-5 before:bg-bright-gray before:absolute before:-left-3"
                  )}
                >
                  <Carts />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <Keywords />
              <DeliveryZone />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
