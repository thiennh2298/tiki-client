import React from "react";
import { RiHome5Fill } from "react-icons/ri";
import { PiSmileyWink } from "react-icons/pi";
import NavItem from "./NavItem";

const Navigations = () => {
  return (
    <div>
      <NavItem url="" className="px-4 text-secondary gap-1 hover:text-primary">
        <RiHome5Fill fontSize={24} className="text-inherit" />
        <p className="font-medium text-sm">Trang chủ</p>
      </NavItem>
      <NavItem url="" className="px-4 text-secondary gap-1 hover:text-primary">
        <PiSmileyWink fontSize={24} className="text-inherit" />
        <p className="font-medium text-sm">Tài khoản</p>
      </NavItem>
    </div>
  );
};

export default Navigations;
