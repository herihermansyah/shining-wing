"use client";
import React, {useState} from "react";
import MenuList from "../ui/MenuList";
import {mainMenu} from "@/data/menu";
import ToggleButton from "../ui/ToggleButton";
import {TiThMenuOutline} from "react-icons/ti";
import {IoClose} from "react-icons/io5";
import Logo from "../ui/Logo";
import SearchBar from "../ui/SearchBar";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="container mx-auto flex justify-between items-center px-2 md:px-0 py-3 relative">
      <div className="md:order-2">
        <ToggleButton
          onClick={() => setOpen((prev) => !prev)}
          click={open}
          iconOf={<IoClose />}
          iconOn={<TiThMenuOutline />}
          className="md:hidden"
        />
        <MenuList
          data={mainMenu}
          path={(item) => item.path}
          title={(item) => item.title}
          arialLabel="main navigation"
          className={`fixed flex flex-col gap-8 top-0 left-1/2 -translate-x-1/2 text-center transition-all duration-500 ease-in-out
            md:static md:flex-row md:left-0 md:translate-x-0 ${
              open ? "translate-y-20" : "-translate-y-full"
            } md:translate-y-0 `}
          titleCalss="capitalize"
        />
      </div>
      <div
        className="absolute flex top-5 right-1/2 translate-x-1/2 
       md:static md:top-0 md:right-0 md:translate-x-0"
      >
        <Logo
          logoText="shining wing"
          textClass="uppercase font-bold whitespace-nowrap"
        />
      </div>
      <div className="md:order-3">
        <SearchBar
          inputClass="absolute top-17 left-1/2 -translate-x-1/2 w-[95%] bg-yellow-400 z-50 
          md:static md:top-0 md:left-0 md:-translate-x-0 md:w-full
        "
        />
      </div>
    </div>
  );
}

export default Header;
