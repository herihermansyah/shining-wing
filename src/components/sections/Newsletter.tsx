import React from "react";
import FormNews from "../ui/FormNews";

function Newsletter() {
  return (
    <div className="flex flex-col gap-4">
      <span>
        Get the latest fashion news and product launches by simply subscribing
        to our newsletter.
      </span>
      <FormNews />
      <span>By registering, you agree to the terms in our Privacy Policy.</span>
    </div>
  );
}

export default Newsletter;
