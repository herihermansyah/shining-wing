import {IconButton} from "@mui/material";
import React from "react";

type ToggleButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  click: boolean;
  iconOn: React.ReactNode;
  iconOf: React.ReactNode;
  className?: string;
};

function ToggleButton({
  onClick,
  click,
  iconOn,
  iconOf,
  className = "",
}: ToggleButtonProps) {
  return (
    <div className={className}>
      <IconButton onClick={onClick}>
        {click ? iconOf ?? "" : iconOn ?? ""}
      </IconButton>
    </div>
  );
}

export default ToggleButton;
