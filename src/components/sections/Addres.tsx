import React from "react";
import Link from "next/link";

function Addres() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <span>
          As Asia Online Fashion Hub, we create endless style possibilities by
          expanding our product range, from international brands to coveted
          local finds. We put you at the center. With SHINING WING, You Own Now.
        </span>
      </div>
      <div>
        <h2>cunsumer complaints service shining wing</h2>
      </div>
      <div className="flex flex-col gap-1">
        <Link href="/">
          <span>email: shiningwing@gmail.com</span>
        </Link>
        <Link href="/">
          <span>Phone: +021-984759</span>
        </Link>
      </div>
      <div>
        <span>
          Directorate General of Consumer Protection and Trade Order, Ministry
          of Trade of the Republic of Indonesia
        </span>
      </div>
      <div>
        <Link href="/">
          <span>WhatsApp: +62834-2342-2342</span>
        </Link>
      </div>
    </div>
  );
}

export default Addres;
