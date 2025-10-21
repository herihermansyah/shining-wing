import React from "react";
import SenteceList from "../ui/SenteceList";
import {termAndConditions} from "@/data/SentenceData";
import HightlighText from "../ui/HightlighText";

function TermAndConditions() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <HightlighText text="Terms and Conditions" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          alias porro qui a ut et necessitatibus quaerat cumque, eaque optio
          facere architecto vel facilis labore dolores animi aut nihil sint,
          soluta nesciunt doloremque beatae, veritatis accusantium! Animi nam
          veritatis possimus omnis hic natus quos necessitatibus voluptatibus
          esse ipsam accusantium vero aliquid ratione nobis iure quia nemo,
          accusamus delectus a? Fugiat ex voluptates sapiente veritatis
          perferendis sit a repudiandae tenetur reprehenderit minus porro magnam
          culpa exercitationem ipsam incidunt architecto dignissimos quam,
          quibusdam iste illum consequuntur cum. Sunt temporibus ex sapiente
          officiis id vero magnam eos aspernatur quo labore, ab unde sequi!
        </p>
      </div>
      <SenteceList
        data={termAndConditions}
        title={(item) => item.title}
        description={(item) => item.description}
      />
    </div>
  );
}

export default TermAndConditions;
