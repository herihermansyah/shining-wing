import React from "react";
import HightlighText from "../ui/HightlighText";

function About() {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <HightlighText text="about shining wing" />
      <div className="flex flex-col gap-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          accusantium, quasi perspiciatis reiciendis voluptatem aspernatur
          cumque velit molestias quidem, similique explicabo distinctio. Ipsam
          excepturi rerum, asperiores vitae et odio corrupti architecto error
          quae ex, ducimus nihil temporibus dicta quas. Corrupti molestiae nulla
          minus similique, beatae odit. Ullam ex cum hic.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
          suscipit eaque, a accusantium architecto tempora ratione! Tempora
          laboriosam nostrum officia!
        </p>
      </div>
    </div>
  );
}

export default About;
