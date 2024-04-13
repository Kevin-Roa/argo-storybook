import React from "react";
import Switch from "@mui/material/Switch";

export interface ToggleProps {
  checked?: boolean;
  disabled?: boolean;
  color?: string;
  size?: "small" | "medium";
  onChange?: (e: any) => void;
}

const Toggle = ({
  checked,
  disabled = false,
  color,
  size = "medium",
  onChange,
  ...props
}: ToggleProps) => {
  const style = {
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: color,
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: color,
    },
  };
  return (
    <Switch
      onChange={onChange}
      checked={checked}
      sx={style}
      size={size}
      disabled={disabled}
    />
  );
};

export default Toggle;
