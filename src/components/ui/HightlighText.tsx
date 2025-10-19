import React from "react";

type HightlighTextProps = {
  text: string;
  textClass?: string;
  className?: string;
  icon?: React.ReactNode;
  iconClass?: string;
};

function HightlighText({
  text,
  textClass = "text-md font-bold uppercase",
  iconClass = "",
  className = "text-center mb-5",
  icon,
}: HightlighTextProps) {
  return (
    <div className={className}>
      {icon && <div className={iconClass}>{icon}</div>}
      <h2 className={textClass}>{text}</h2>
    </div>
  );
}

export default HightlighText;
