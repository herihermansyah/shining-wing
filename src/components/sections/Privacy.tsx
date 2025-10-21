import React from "react";
import SenteceList from "../ui/SenteceList";
import {privacyPolicy} from "@/data/SentenceData";

function Privacy() {
  return (
    <div>
      <SenteceList
        data={privacyPolicy}
        title={(item) => item.title}
        description={(item) => item.description}
      />
    </div>
  );
}

export default Privacy;
