"use client";
import React, {useState, useEffect, useRef} from "react";
import MenuList from "../ui/MenuList";
import {mainMenu} from "@/data/menu";
import ToggleButton from "../ui/ToggleButton";
import {TiThMenuOutline} from "react-icons/ti";
import {IoClose} from "react-icons/io5";
import Logo from "../ui/Logo";
import SearchBar from "../ui/SearchBar";

function Header() {
  const [open, setOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY.current && currentScroll > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={menuRef}
      className={`bg-header w-full transition-transform duration-500 ease-in-out
      ${showHeader ? "translate-y-0" : "-translate-y-full"}
    `}
    >
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
              bg-header w-full py-8 rounded-bl-4xl rounded-br-4xl md:py-0 
              md:static md:flex-row md:left-0 md:translate-x-0 
              ${open ? "translate-y-16" : "-translate-y-full"} md:translate-y-0
            `}
            titleCalss="capitalize"
            onItemClick={() => setOpen(false)}
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
            inputClass="absolute top-17 left-1/2 -translate-x-1/2 w-[95%] bg-white z-50 
            md:static md:top-0 md:left-0 md:-translate-x-0 md:w-full
          "
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
