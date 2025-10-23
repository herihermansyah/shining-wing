import React from "react";
import HightlighText from "../ui/HightlighText";
import ContactList from "../ui/ContactList";
import {contactData} from "@/data/contactData";
import Addres from "./Addres";

function Contact() {
  return (
    <div className="flex flex-col gap-20">
      <div className="bg-option p-10 rounded-xl">
        <HightlighText text="Protect yourself from fraud" />
        <div className="flex flex-col gap-4">
          <p>
            - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            repellendus quo quis modi architecto sunt voluptates blanditiis
            atque fugit omnis!
          </p>
          <p>
            - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            repellendus quo quis modi architecto sunt voluptates blanditiis
            atque fugit omnis!
          </p>
          <p>
            - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            repellendus quo quis modi architecto sunt voluptates blanditiis
            atque fugit omnis!
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-10 bg-option p-10">
        <HightlighText text="contact us" />
        <div className="flex flex-col sm:flex-row not-last:sm:gap-10 gap-4 justify-between items-start ">
          <ContactList
            data={contactData}
            title={(item) => item.title}
            path={(item) => item.path}
            icon={(item) => item.icon}
            titleClass="uppercase text-xl"
            className="flex flex-col gap-1"
            linkClass="flex items-center gap-4"
            iconClass="text-2xl"
          />
        </div>
      </div>
      <div className="flex flex-col  gap-10 bg-option p-10">
        <HightlighText text="addres" />
        <Addres />
      </div>
    </div>
  );
}

export default Contact;
