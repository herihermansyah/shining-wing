import React from "react";
import ContactList from "../ui/ContactList";
import {contactData} from "@/data/contactData";
import HightlighText from "../ui/HightlighText";
import MenuList from "../ui/MenuList";
import {mainMenu, serviceAbout} from "@/data/menu";
import Addres from "../sections/Addres";
import Newsletter from "../sections/Newsletter";

function Footer() {
  return (
    <div className="container mx-auto py-4 px-2 md:px-0 flex flex-col gap-10">
      <div
        className="flex flex-col gap-10 
        lg:grid lg:grid-cols-3 
        xl:flex xl:flex-row items-start justify-center"
      >
        {/* address */}
        <div>
          <HightlighText
            text="shining wing"
            textClass="text-left capitalize whitespace-nowrap font-bold"
            className="mb-2"
          />
          <Addres />
        </div>
        {/* box 2 */}
        <div
          className="flex gap-10 flex-wrap sm:gap-10 md:gap-20 
        lg:grid lg:grid-cols-2 lg:gap-6
        xl:flex xl:flex-row xl:flex-nowrap xl:gap-10
        "
        >
          {/* social media */}
          <div>
            <HightlighText
              text="social media"
              textClass="text-left capitalize whitespace-nowrap font-bold"
              className="mb-2"
            />
            <ContactList
              data={contactData}
              title={(item) => item.title}
              path={(item) => item.path}
              className="flex flex-col gap-1"
              titleClass="capitalize"
            />
          </div>
          {/* menu */}
          <div>
            <HightlighText
              text="menu"
              textClass="text-left capitalize font-bold"
              className="mb-2"
            />
            <MenuList
              data={mainMenu}
              title={(item) => item.title}
              path={(item) => item.path}
              className="flex flex-col gap-1"
              titleCalss="capitalize"
            />
          </div>
          {/* service about */}
          <div>
            <HightlighText
              text="service about"
              textClass="text-left capitalize whitespace-nowrap font-bold"
              className="mb-2"
            />
            <MenuList
              data={serviceAbout}
              title={(item) => item.title}
              path={(item) => item.path}
              className="flex flex-col gap-1"
              titleCalss="capitalize whitespace-nowrap"
            />
          </div>
        </div>
        {/* box 2 */}

        {/* newsletter */}
        <div>
          <HightlighText
            text="You are new to SHINING WING"
            textClass="text-left capitalize whitespace-nowrap font-bold"
            className="mb-2"
          />
          <Newsletter />
        </div>
      </div>
      {/* coypryight */}
      <div className="flex flex-col gap-2 justify-center text-center">
        <div className="flex justify-center underline ">
          <MenuList
            data={serviceAbout.filter((item) => [1, 3, 4].includes(item.id))}
            title={(item) => item.title}
            path={(item) => item.path}
            className="flex flex-col md:flex-row items-center gap-1 md:gap-4"
            titleCalss="capitalize"
          />
        </div>
        <span>
          {" "}
          © {new Date().getFullYear()} Shining Wing. All rights reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;
